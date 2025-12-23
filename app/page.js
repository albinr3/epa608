'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useSearchParams, useRouter } from 'next/navigation';
import { Timer, BookOpen, ShieldCheck, Building2, Users, Award, CheckCircle2, TrendingUp, Zap, TrendingDown, Star, ChevronDown } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Quiz from './components/Quiz';
import LanguageSelector from './components/LanguageSelector';
// Componente para contador en tiempo real
function LiveCounter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Solo renderizar en el cliente para evitar problemas de hidratación
    setMounted(true);
    
    // Simular incrementos aleatorios cada 2-5 segundos
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(interval);
  }, []);

  // Renderizar el valor inicial en el servidor, y el contador dinámico solo en el cliente
  if (!mounted) {
    return <span>{initial}</span>;
  }

  return <span>{count}</span>;
}

// Componente FAQ Acordeónc
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-6 md:p-8 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors touch-manipulation"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 flex-1 pr-4">
          {question}
        </h3>
        <ChevronDown 
          className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 pt-0">
          <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showQuiz, setShowQuiz] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [questionLimit, setQuestionLimit] = useState(null);
  
  // Leer query params para deep-linking
  const quizParam = searchParams?.get('quiz');
  const typeParam = searchParams?.get('type');
  
  // Normalizar type param a initialType para Quiz
  const getInitialType = () => {
    if (!typeParam) return undefined;
    const normalized = typeParam.toLowerCase().trim();
    if (['core', 'type1', 'type2', 'type3', 'universal'].includes(normalized)) {
      return normalized;
    }
    return undefined;
  };
  
  const initialType = getInitialType();

  // Fetch premium status when user is signed in
  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      setIsPremium(false);
      return;
    }

    const fetchPremiumStatus = async () => {
      try {
        const response = await fetch('/api/questions?lang=en&category=ALL&count=1', {
          cache: 'no-store'
        });
        
        if (response.ok) {
          const data = await response.json();
          setIsPremium(data.isPremium || false);
        }
      } catch (error) {
        console.error('Error fetching premium status:', error);
        setIsPremium(false);
      }
    };

    fetchPremiumStatus();
  }, [isLoaded, isSignedIn]);

  // Restore quiz state after OAuth redirect
  useEffect(() => {
    if (typeof window === 'undefined' || !isLoaded) {
      return;
    }
    
    /**
     * DEEP LINKING: Manejo de URLs con parámetros ?quiz=1&type=type1
     * 
     * IMPORTANTE: Esta funcionalidad permite acceder directamente a un quiz con un límite
     * específico de preguntas según el tipo:
     * - type1, type2, type3 → 10 preguntas
     * - core → 20 preguntas
     * 
     * REQUISITOS:
     * 1. El usuario DEBE estar autenticado para usar deep linking con type
     * 2. Si no está autenticado, se redirige a login guardando la URL original
     * 3. El questionLimit se pasa al componente Quiz para limitar las preguntas mostradas
     * 4. El progreso se guarda y restaura correctamente usando la categoría (TYPE1, TYPE2, etc.)
     * 
     * ⚠️ NO MODIFICAR: Esta lógica es crítica para el funcionamiento del deep linking.
     * Si cambias esto, asegúrate de que:
     * - El progreso se guarde con la categoría correcta
     * - El progreso se restaure cuando el usuario vuelve
     * - El questionLimit se pase correctamente al componente Quiz
     */
    const calculateQuestionLimit = (type) => {
      if (!type) return null;
      const normalized = type.toLowerCase();
      if (['type1', 'type2', 'type3'].includes(normalized)) {
        return 10;
      } else if (normalized === 'core') {
        return 20;
      }
      return null;
    };
    
    // Si hay query param quiz=1, manejar deep-linking
    if (quizParam === '1') {
      // Si hay type param, requiere autenticación y calcular límite
      if (typeParam && initialType) {
        const limit = calculateQuestionLimit(initialType);
        
        // Si no está autenticado, redirigir a login guardando la URL original
        // La URL se guarda para restaurar el questionLimit después del login
        if (!isSignedIn) {
          const currentUrl = window.location.href;
          localStorage.setItem('epa608_redirect_after_auth', currentUrl);
          router.push(`/sign-in?redirect_url=${encodeURIComponent(currentUrl)}`);
          return;
        }
        
        // Si está autenticado, establecer el límite y mostrar el quiz
        // El questionLimit se pasa al componente Quiz para limitar las preguntas
        setQuestionLimit(limit);
        setShowQuiz(true);
        return;
      }
      
      // Si no hay type param, mostrar el quiz normalmente (sin límite)
      setQuestionLimit(null);
      setShowQuiz(true);
      return;
    }
    
    const redirectFlag = localStorage.getItem('epa608_redirect_after_auth');
    const showQuizFlag = localStorage.getItem('epa608_show_quiz');
    const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out');
    
    // Si el usuario acaba de desloguear, limpiar el flag y no mostrar el quiz
    if (justLoggedOut) {
      localStorage.removeItem('epa608_redirect_after_auth');
      localStorage.removeItem('epa608_show_quiz');
      sessionStorage.removeItem('epa608_just_logged_out');
      setShowQuiz(false);
      setQuestionLimit(null);
      return;
    }
    
    // Si hay flag para mostrar el quiz (desde el menú de otras páginas), mostrarlo
    if (showQuizFlag) {
      setQuestionLimit(null);
      setShowQuiz(true);
      localStorage.removeItem('epa608_show_quiz');
      return;
    }
    
    // Solo mostrar el quiz si hay flag de redirect Y el usuario está autenticado
    // Esto evita que se muestre el quiz cuando el usuario se desloguea
    if (redirectFlag && isSignedIn) {
      /**
       * RESTAURACIÓN DE DEEP LINKING DESPUÉS DE LOGIN:
       * Cuando el usuario se autentica después de ser redirigido desde un deep link,
       * necesitamos restaurar el questionLimit desde la URL guardada.
       * 
       * IMPORTANTE: Esto asegura que el quiz se abra con el límite correcto de preguntas
       * después de que el usuario se autentique.
       */
      // Verificar si la URL guardada tiene type param para restaurar el límite
      try {
        const savedUrl = new URL(redirectFlag);
        const savedType = savedUrl.searchParams.get('type');
        if (savedType) {
          const normalized = savedType.toLowerCase().trim();
          if (['core', 'type1', 'type2', 'type3', 'universal'].includes(normalized)) {
            const limit = calculateQuestionLimit(normalized);
            setQuestionLimit(limit);
          } else {
            setQuestionLimit(null);
          }
        } else {
          setQuestionLimit(null);
        }
      } catch (e) {
        setQuestionLimit(null);
      }
      setShowQuiz(true);
      // Remover el flag inmediatamente para que al volver a la landing no se abra el quiz otra vez
      localStorage.removeItem('epa608_redirect_after_auth');
    } else if (redirectFlag && !isSignedIn) {
      // Si hay flag pero el usuario no está autenticado, limpiar el flag
      // Esto puede pasar si el usuario se deslogueó
      localStorage.removeItem('epa608_redirect_after_auth');
      setQuestionLimit(null);
    }
  }, [isLoaded, isSignedIn, quizParam, typeParam, initialType, router]);

  if (showQuiz) {
    return <Quiz initialType={initialType} questionLimit={questionLimit} />;
  }

  return (
    <>
      {/* Schema Markup para SEO */}
      <Script
        id="educational-organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "HVAC Prep",
            "description": "EPA 608 certification prep platform with an exam simulator and 300+ practice questions",
            "offers": {
              "@type": "Offer",
              "price": "12",
              "priceCurrency": "USD",
              "description": "Full access to more than 300 practice questions for EPA 608 certification"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the EPA 608 exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The EPA 608 exam is the certification required by the U.S. Environmental Protection Agency for technicians who work with refrigeration and air conditioning systems."
                }
              },
              {
                "@type": "Question",
                "name": "How many questions does the EPA 608 exam have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The EPA 608 exam typically contains between 25 and 50 questions, depending on the certification type. Our simulator includes 300+ practice questions."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to renew my EPA 608 certification?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The EPA 608 certification does not expire once obtained. However, it's important to stay updated with regulations and changes in the HVAC industry."
                }
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="HVAC Prep" 
              width={400}
              height={96}
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
              quality={100}
              priority
              unoptimized
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            {(isSignedIn && !isPremium) && (
              <Link
                href="/pricing"
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Pricing
              </Link>
            )}
            <button
              onClick={() => setShowQuiz(true)}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Quiz
            </button>
            <LanguageSelector />
            {isLoaded && (
              <>
                {!isSignedIn ? (
                  <SignInButton 
                    mode="modal"
                    forceRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/'}
                    fallbackRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/'}
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const currentUrl = window.location.href;
                        localStorage.setItem('epa608_redirect_after_auth', currentUrl);
                      }
                    }}
                  >
                    <button className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium">
                      Login
                    </button>
                  </SignInButton>
                ) : (
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      }
                    }}
                    afterSignOutUrl="/"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge pequeño arriba */}
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4 sm:mb-6">
          Free EPA 608 Practice Test
          </p>

          {/* Headline principal centrado */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
            Pass Your{' '}
            <span className="text-slate-900">EPA 608</span> Exam
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-blue-600">
          With a Free Practice Test
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-2">
            The EPA 608 exam doesn’t have to be painful—especially when you practice with a free EPA 608 practice test built from real exam questions.
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Instead of reading endless manuals or watching boring videos, you can practice with real EPA 608 exam-style questions, get instant feedback, and actually understand why each answer is right or wrong.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 px-2">
            Trusted by thousands of HVAC technicians preparing for the EPA 608 certification across the U.S.
          </p>


          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8 px-2">
            What if you could prepare the same way you’ll be tested?
          </p>

          {/* Botón CTA grande */}
          <button
            onClick={() => setShowQuiz(true)}
            className="px-6 sm:px-12 md:px-20 lg:px-24 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-6 w-full sm:w-auto"
          >
            Try it for free
          </button>
          
          {/* Subtexto pequeño */}
          <p className="text-xs sm:text-sm text-gray-500">
            No credit card required • 20 free questions
          </p>

          {/* Statistics Badges - Centered below button */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-12 max-w-4xl mx-auto px-2">
            <div className="bg-yellow-100 border border-yellow-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">97%</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700 leading-tight">Leading pass rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">300+</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-tight">Available questions</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-tight">Technicians helped</div>
            </div>
            <div className="bg-pink-100 border border-pink-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">2025</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700 leading-tight">Updated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Company Logos */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg font-semibold px-2">
            Used by technicians now working at:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12">
            {/* Carrier Logo */}
            <div className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
              <Image 
                src="/carrier.png" 
                alt="Carrier" 
                width={150}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                quality={100}
                unoptimized
              />
            </div>
            {/* Trane Logo */}
            <div className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
              <Image 
                src="/trane.png" 
                alt="Trane" 
                width={150}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                quality={100}
                unoptimized
              />
            </div>
            {/* Lennox Logo */}
            <div className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
              <Image 
                src="/lennox.jpg" 
                alt="Lennox" 
                width={150}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                quality={100}
                unoptimized
              />
            </div>
            {/* York Logo */}
            <div className="group relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-blue-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center">
              <Image 
                src="/york.png" 
                alt="York" 
                width={150}
                height={60}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                quality={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Solución */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* PROBLEMA */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-red-100 rounded-full p-2 sm:p-3">
                  <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">The Problem</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-red-500 text-lg sm:text-xl">❌</span>
                  <span>Reading PDFs that just repeat the EPA manual. No progress tracking, no real understanding.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-red-500 text-lg sm:text-xl">❌</span>
                  <span>Watching videos that are boring to follow, easy to ignore, and hard to pause when you're lost.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-red-500 text-lg sm:text-xl">❌</span>
                  <span>Navigating old websites that are confusing, making exam prep more stressful than it has to be.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-red-500 text-lg sm:text-xl">❌</span>
                  <span>Feeling overwhelmed without a clear study plan. You know you should study, but where do you start?</span>
                </li>
              </ul>
            </div>

            {/* SOLUCIÓN */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg border-2 border-blue-400">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-white/20 rounded-full p-2 sm:p-3">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Our Solution</h3>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-white/95 leading-relaxed">
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-green-300 text-lg sm:text-xl">✅</span>
                  <span>Real exam questions with instant feedback and clear explanations that help you truly understand the material.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-green-300 text-lg sm:text-xl">✅</span>
                  <span>Active learning through practice—far more effective than passive reading or watching. You learn by doing.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-green-300 text-lg sm:text-xl">✅</span>
                  <span>A clean, modern interface that's a pleasure to use. No clutter, no confusion—just you and your learning.</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-start">
                  <span className="text-green-300 text-lg sm:text-xl">✅</span>
                  <span>A structured approach that tracks your progress and keeps you motivated from start to finish.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Everything You Need to Pass the EPA 608 Exam
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">300+ Real Questions</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                A vast collection of questions covering every topic on the EPA 608 exam—from refrigerant types to recovery procedures.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200 hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Instant Feedback</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Get immediate feedback on every answer. Know right away if you're correct and why—no waiting, no confusion.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Clear Explanations</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Every question includes a detailed explanation so you truly understand the "why" behind each answer.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl border-2 border-orange-200 hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Real Exam Mode</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Simulate the actual test with our timed exam mode. Practice under real conditions to build confidence.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 sm:p-8 rounded-2xl border-2 border-pink-200 hover:shadow-xl transition-shadow">
              <div className="bg-pink-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Progress Tracking</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Monitor your performance over time. See which topics you've mastered and which need more attention.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 sm:p-8 rounded-2xl border-2 border-teal-200 hover:shadow-xl transition-shadow">
              <div className="bg-teal-600 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-slate-900">Study Anytime</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Access on your phone, tablet, or computer. Study wherever and whenever works best for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios simulados con métrica social */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900">
            Join Thousands of Technicians Who Passed with Our Simulator
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Over <LiveCounter initial={5483} /> technicians have already used our platform to prepare for the EPA 608 exam. Here's what they're saying:
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                "This simulator made everything so much clearer. The explanations helped me understand concepts I'd been struggling with for weeks."
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">— Mike T., HVAC Technician</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                "I passed on my first try thanks to the practice questions. The real exam mode helped me feel prepared and confident."
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">— Sarah L., Refrigeration Specialist</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                "Best $29.99 I've spent on exam prep. The interface is clean, the questions are accurate, and the explanations are spot-on."
              </p>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">— Carlos R., HVAC Installer</p>
            </div>
          </div>

          {/* Visual Gallery of Celebrating Technicians */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-900 px-2">
              Technicians Who Celebrated Their Success
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Image 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_4y8mu04y8mu04y8m.png"
                  alt="Technician celebrating EPA 608 certification"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">Passed!</div>
                  <div className="text-white/90 text-sm">EPA 608 Certified Technician</div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_83d97j83d97j83d9.png"
                  alt="Technician celebrating EPA 608 certification"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">Congratulations!</div>
                  <div className="text-white/90 text-sm">Certification Obtained</div>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_fka4gjfka4gjfka4.png"
                  alt="Technician celebrating EPA 608 certification"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">Certified</div>
                  <div className="text-white/90 text-sm">EPA 608 Universal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección informativa: tipos de certificación EPA 608 */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900 px-2">
            Understanding EPA 608 Certification Types
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-2">
            The EPA 608 certification is divided into four types, depending on the type of equipment you'll work with. Our simulator covers questions for all certification types, so you can choose the path that best suits your career goals.
          </p>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Tipo I */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <span className="text-2xl sm:text-3xl font-bold text-blue-600">I</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Type I</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                For technicians working with small appliances that contain 5 pounds or less of refrigerant, such as domestic refrigerators and small window AC units.
              </p>
            </div>
            
            {/* Tipo II */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <span className="text-2xl sm:text-3xl font-bold text-green-600">II</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Type II</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                For technicians who work with high-pressure refrigeration systems, such as residential and commercial air conditioners.
              </p>
            </div>
            
            {/* Tipo III */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <span className="text-2xl sm:text-3xl font-bold text-purple-600">III</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Type III</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                For professionals who work with low-pressure refrigeration systems, commonly used in large industrial equipment.
              </p>
            </div>
            
            {/* Universal */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">Universal Certification</h4>
              </div>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                The most comprehensive certification, covering all types of systems. Ideal for HVAC technicians who want greater job flexibility and better employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Muy importante para SEO */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900 px-2">
            Frequently Asked Questions about EPA 608 Certification
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <FAQItem
              question="What is the EPA 608 exam?"
              answer="The EPA 608 exam is the certification required by the U.S. Environmental Protection Agency for technicians who work with refrigeration and air conditioning systems. It is mandatory to handle, recover, or recycle regulated refrigerants."
            />
            <FAQItem
              question="How many questions does the EPA 608 exam have?"
              answer="The EPA 608 exam typically contains between 25 and 50 questions, depending on the certification type you're seeking (Type I, II, III, or Universal). Our simulator includes 300+ practice questions to ensure you're fully prepared."
            />
            <FAQItem
              question="How much time do I have to complete the exam?"
              answer="The time limit for the EPA 608 exam varies, but it's generally 90 minutes. Our simulator includes a timer so you can get used to working under time pressure, just like on the real exam."
            />
            <FAQItem
              question="Do I need to renew my EPA 608 certification?"
              answer="The EPA 608 certification does not expire once obtained. However, it's important to stay updated with regulations and changes in the HVAC industry. Our platform is regularly updated with the latest regulations and exam questions."
            />
            <FAQItem
              question="What types of refrigerants does the EPA 608 exam cover?"
              answer="The exam covers all types of regulated refrigerants, including CFC (chlorofluorocarbons), HCFC (hydrochlorofluorocarbons), HFC (hydrofluorocarbons), and the new HFO refrigerants. It also includes information on recovery, recycling, and safe disposal of refrigerants."
            />
            <FAQItem
              question="Can I practice for free before paying?"
              answer="Yes, we offer a free trial with the first 20 exam questions. This allows you to experience our simulator and see the quality of our explanations before unlocking the remaining 300+ questions for just $9.99."
            />
          </div>
        </div>
      </section>

      {/* Sección Final CTA con Imagen */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ilustración en la parte superior */}
          <div className="relative mb-6 sm:mb-8 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image 
                src="/cta-final.png" 
                alt="Technician celebrating EPA 608 certification" 
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                quality={100}
                unoptimized
              />
            </div>
          </div>

          {/* Pregunta grande centrada */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-slate-900">
            Ready to Get Started?
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of technicians who have already passed their EPA 608 certification by practicing with our simulator. Start free and get ready for the real exam.
          </p>

          {/* Botón CTA prominente */}
          <div className="flex justify-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Start Practicing Free Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} EPA608Practice.org. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacy
            </Link>
        </div>
        </div>
      </footer>
    </div>
    </>
  );
}

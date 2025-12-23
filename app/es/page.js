'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { useSearchParams, useRouter } from 'next/navigation';
import { Timer, BookOpen, ShieldCheck, Building2, Users, Award, CheckCircle2, TrendingUp, Zap, TrendingDown, Star, ChevronDown } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import Quiz from '../components/Quiz-es';
import LanguageSelector from '../components/LanguageSelector';

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

// Componente FAQ Acordeón
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

export default function HomeEs() {
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
        const response = await fetch('/api/questions?lang=es&category=ALL&count=1', {
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

  // Effect to handle redirect after OAuth authentication
  useEffect(() => {
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a window/localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return;
    }
    
    if (!isLoaded) return;
    
    // Calcular límite de preguntas según el tipo (solo para deep linking con type)
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
        if (!isSignedIn) {
          const currentUrl = window.location.href;
          localStorage.setItem('epa608_redirect_after_auth', currentUrl);
          router.push(`/sign-in?redirect_url=${encodeURIComponent(currentUrl)}`);
          return;
        }
        
        // Si está autenticado, establecer el límite y mostrar el quiz
        setQuestionLimit(limit);
        setShowQuiz(true);
        return;
      }
      
      // Si no hay type param, mostrar el quiz normalmente (sin límite)
      setQuestionLimit(null);
      setShowQuiz(true);
      return;
    }

    // Check if user just returned from authentication
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
    if (isSignedIn && redirectFlag) {
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
      // User just authenticated, show quiz and restore state
      setShowQuiz(true);
      // Remover el flag inmediatamente para que al volver a la landing no se abra el quiz otra vez
      localStorage.removeItem('epa608_redirect_after_auth');
    } else if (redirectFlag && !isSignedIn) {
      // Si hay flag pero el usuario no está autenticado, limpiar el flag
      // Esto puede pasar si el usuario se deslogueó
      localStorage.removeItem('epa608_redirect_after_auth');
      setQuestionLimit(null);
    }
  }, [isSignedIn, isLoaded, quizParam, typeParam, initialType, router]);

  if (showQuiz) {
    return <Quiz initialType={initialType} questionLimit={questionLimit} />;
  }

  return (
    <>
      {/* Schema Markup para SEO */}
      <Script
        id="educational-organization-schema-es"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "HVAC Prep",
            "description": "Plataforma de preparación para la certificación EPA 608 con simulador de examen y más de 300 preguntas de práctica",
            "offers": {
              "@type": "Offer",
              "price": "12",
              "priceCurrency": "USD",
              "description": "Acceso completo a más de 300 preguntas de práctica para certificación EPA 608"
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
        id="faq-schema-es"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es el examen EPA 608?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El examen EPA 608 es la certificación requerida por la Agencia de Protección Ambiental de Estados Unidos para técnicos que trabajan con sistemas de refrigeración y aire acondicionado."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuántas preguntas tiene el examen EPA 608?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El examen EPA 608 típicamente contiene entre 25 y 50 preguntas, dependiendo del tipo de certificación. Nuestro simulador incluye más de 300 preguntas de práctica."
                }
              },
              {
                "@type": "Question",
                "name": "¿Necesito renovar mi certificación EPA 608?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La certificación EPA 608 no expira una vez obtenida. Sin embargo, es importante mantenerse actualizado con las regulaciones y cambios en la industria HVAC."
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
          <Link href="/es">
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
                href="/es/pricing"
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Precios
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
                    forceRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/es'}
                    fallbackRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/es'}
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
                    afterSignOutUrl="/es"
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
            Práctica Gratuita para Certificación EPA 608
          </p>

          {/* Headline principal centrado */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
            Aprueba tu certificación{' '}
            <span className="text-slate-900">EPA 608</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight text-blue-600">
            Sin complicaciones
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Aburrido. Confuso. Intimidante. No, no estamos hablando de las noticias de hoy. Estamos hablando del examen EPA 608. Los manuales son abrumadores. Los PDFs son difíciles de navegar. El proceso está lleno de frustraciones. No es de extrañar que lo evites.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-6 sm:mb-8 px-2">
            ¿Y si te dijéramos que hay una mejor manera?
          </p>

          {/* Botón CTA grande */}
          <button
            onClick={() => setShowQuiz(true)}
            className="px-6 sm:px-12 md:px-20 lg:px-24 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 mb-6 w-full sm:w-auto touch-manipulation"
          >
            Probar Gratis
          </button>
          
          {/* Subtexto pequeño */}
          <p className="text-xs sm:text-sm text-gray-500">
            No se requiere tarjeta de crédito • 20 preguntas gratis
          </p>

          {/* Badges de Estadísticas - Centrados debajo del botón */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-12 max-w-4xl mx-auto px-2">
            <div className="bg-yellow-100 border border-yellow-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">97%</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700 leading-tight">Tasa de aprobación líder</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-1 sm:mb-2">300+</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-tight">Preguntas disponibles</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 mb-1 sm:mb-2">
                200+
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-tight">Técnicos ayudados</div>
            </div>
            <div className="bg-pink-100 border border-pink-200 rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">2025</div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700 leading-tight">Actualizado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Logos de Empresas */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg font-semibold px-2">
            Usado por técnicos que ahora trabajan en:
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

      {/* Features Section - Con fondo azul para variar */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-blue-100 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wide mb-3 sm:mb-4">
            PREGUNTAS CASI IDÉNTICAS AL EXAMEN REAL
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 text-white px-2">
            ¿Qué nos hace diferentes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3 sm:mb-4">01</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">No te aburrirás</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                La preparación para EPA 608 nunca será tan divertida como unas vacaciones, pero creemos que la diversión es importante y hacemos todo lo posible para que nuestros programas sean lo más amigables posible.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3 sm:mb-4">02</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">No perderás tiempo</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Tus pruebas de práctica siempre están adaptadas al manual específico de EPA 608. Nuestro sistema automáticamente te vuelve a probar en todas las preguntas que fallaste para que puedas seguir practicando hasta dominar cada una.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-3 sm:mb-4">03</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Realmente aprenderás</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Todo está desarrollado por técnicos reales que usan ciencia cognitiva probada y entienden cómo las personas realmente aprenden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Fame - Testimonios */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-blue-600 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-wide mb-3 sm:mb-4">
            RESEÑAS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 text-slate-900 px-2">
            Esto podría ser tú
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
            Rostros reales de personas reales que aprobaron su examen en el primer intento. Ellos dominaron el examen EPA 608 y tú también puedes. Recuerda: no hay libertad como tener tu certificación.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
            {/* Testimonio 1 */}
            <div className="bg-pink-50 border-2 border-pink-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                "Aprobé el examen EPA 608 en 24 horas"
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                Este sitio definitivamente funciona. Practiqué sus preguntas por 24 horas. Pasé por cada prueba de práctica y luego fui al centro de certificación. Aprobé el examen la primera vez; mientras la mayoría salía con caras tristes.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg sm:text-xl">JM</span>
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg text-slate-900">Juan Martínez</div>
                  <div className="text-sm sm:text-base text-gray-600">Texas</div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                "97% de éxito: De pruebas de práctica a la perfección"
              </h3>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                He pasado por todas las pruebas de práctica y aprobé el examen escrito con facilidad en 15 minutos y con un 97% de aciertos. Si puedes pasar por estas pruebas, no hay posibilidad de que no apruebes el examen principal.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg sm:text-xl">CR</span>
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg text-slate-900">Carlos Rodríguez</div>
                  <div className="text-sm sm:text-base text-gray-600">California</div>
                </div>
              </div>
            </div>
          </div>

          {/* Galería Visual de Personas Celebrando */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-900 px-2">
              Técnicos que celebraron su éxito
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {/* Imagen 1 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_4y8mu04y8mu04y8m.png"
                  alt="Técnico celebrando certificación EPA 608"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">¡Aprobado!</div>
                  <div className="text-white/90 text-sm">Técnico certificado EPA 608</div>
                </div>
              </div>

              {/* Imagen 2 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_83d97j83d97j83d9.png"
                  alt="Técnico celebrando certificación EPA 608"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">¡Felicidades!</div>
                  <div className="text-white/90 text-sm">Certificación obtenida</div>
                </div>
              </div>

              {/* Imagen 3 */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <Image
                  src="/testimonials/Gemini_Generated_Image_fka4gjfka4gjfka4.png"
                  alt="Técnico celebrando certificación EPA 608"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white font-bold text-xl mb-1">Certificado</div>
                  <div className="text-white/90 text-sm">EPA 608 Universal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido SEO - Sección Informativa con fondo gris */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-slate-900 px-2">
            ¿Qué es la Certificación EPA 608?
          </h2>
          
          {/* Tarjetas de Introducción */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-100 rounded-lg p-2 sm:p-3 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Requisito Obligatorio</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-words">
                    La Certificación EPA 608 es un requisito obligatorio en Estados Unidos para todos los técnicos que trabajan con sistemas de refrigeración y aire acondicionado (HVAC). Esta certificación, emitida por la Agencia de Protección Ambiental (EPA), acredita que el técnico cuenta con los conocimientos necesarios para manejar refrigerantes de forma segura, legal y responsable con el medio ambiente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-blue-600 rounded-lg p-2 sm:p-3 flex-shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Ventaja Profesional</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed break-words">
                    Obtener la certificación EPA 608 no solo es un requisito legal, sino también una ventaja profesional clave para trabajar en el sector HVAC, mejorar oportunidades laborales y cumplir con las normativas federales.
                  </p>
                </div>
              </div>
            </div>
          </div>
            
          {/* ¿Qué incluye el examen? */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center text-blue-600">
              ¿Qué incluye el examen EPA 608?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 text-center max-w-3xl mx-auto leading-relaxed">
              El examen EPA 608 evalúa los conocimientos fundamentales que todo técnico HVAC debe dominar:
            </p>
            
            {/* Grid de Iconos para Temas del Examen */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Tipos de Refrigerantes</h4>
                <p className="text-sm text-gray-600">CFC, HCFC y HFC</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Recuperación y Reciclaje</h4>
                <p className="text-sm text-gray-600">Manejo seguro de refrigerantes</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Regulaciones EPA</h4>
                <p className="text-sm text-gray-600">Normativas ambientales</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Procedimientos de Seguridad</h4>
                <p className="text-sm text-gray-600">Buenas prácticas HVAC</p>
              </div>
            </div>
          </div>

          {/* Tipos de Certificación - Grid de Tarjetas */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-center text-blue-600">
              Tipos de Certificación EPA 608
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Existen cuatro tipos de certificación EPA 608, según el tipo de sistemas con los que trabajes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tipo I */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <span className="text-2xl sm:text-3xl font-bold text-blue-600">I</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Tipo I</h4>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Para técnicos que trabajan con sistemas pequeños de refrigeración herméticos, como refrigeradores domésticos y aires acondicionados portátiles.
                </p>
              </div>
              
              {/* Tipo II */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <span className="text-2xl sm:text-3xl font-bold text-green-600">II</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Tipo II</h4>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Dirigida a técnicos que trabajan con sistemas de refrigeración de alta presión, como aires acondicionados residenciales y comerciales.
                </p>
              </div>
              
              {/* Tipo III */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <span className="text-2xl sm:text-3xl font-bold text-purple-600">III</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900">Tipo III</h4>
                </div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Para profesionales que trabajan con sistemas de refrigeración de baja presión, comúnmente utilizados en grandes equipos industriales.
                </p>
              </div>
              
              {/* Universal */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-400">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 rounded-lg p-3">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">Certificación Universal</h4>
                </div>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                  La certificación más completa, que cubre todos los tipos de sistemas. Ideal para técnicos HVAC que desean mayor flexibilidad laboral y mejores oportunidades de empleo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Muy importante para SEO */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900 px-2">
            Preguntas Frecuentes sobre la Certificación EPA 608
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <FAQItem
              question="¿Qué es el examen EPA 608?"
              answer="El examen EPA 608 es la certificación requerida por la Agencia de Protección Ambiental de Estados Unidos para técnicos que trabajan con sistemas de refrigeración y aire acondicionado. Es obligatorio para manipular, recuperar o reciclar refrigerantes regulados."
            />
            <FAQItem
              question="¿Cuántas preguntas tiene el examen EPA 608?"
              answer="El examen EPA 608 típicamente contiene entre 25 y 50 preguntas, dependiendo del tipo de certificación que estés buscando (Tipo I, II, III o Universal). Nuestro simulador incluye más de 300 preguntas de práctica para asegurar que estés completamente preparado."
            />
            <FAQItem
              question="¿Cuánto tiempo tengo para completar el examen?"
              answer="El tiempo límite para el examen EPA 608 varía, pero generalmente es de 90 minutos. Nuestro simulador incluye un temporizador para que te acostumbres a trabajar bajo presión de tiempo, igual que en el examen real."
            />
            <FAQItem
              question="¿Necesito renovar mi certificación EPA 608?"
              answer="La certificación EPA 608 no expira una vez obtenida. Sin embargo, es importante mantenerse actualizado con las regulaciones y cambios en la industria HVAC. Nuestra plataforma se actualiza regularmente con las últimas regulaciones y preguntas del examen."
            />
            <FAQItem
              question="¿Qué tipos de refrigerantes cubre el examen EPA 608?"
              answer="El examen cubre todos los tipos de refrigerantes regulados, incluyendo CFC (clorofluorocarbonos), HCFC (hidroclorofluorocarbonos), HFC (hidrofluorocarbonos), y los nuevos refrigerantes HFO. También incluye información sobre recuperación, reciclaje y eliminación segura de refrigerantes."
            />
            <FAQItem
              question="¿Puedo practicar gratis antes de pagar?"
              answer="Sí, ofrecemos una prueba gratuita con las primeras 20 preguntas del examen. Esto te permite experimentar nuestro simulador y ver la calidad de nuestras explicaciones antes de desbloquear las 300+ preguntas restantes por solo $12."
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
                alt="Técnico celebrando certificación EPA 608" 
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
            ¿Listo para empezar?
          </h2>

          {/* Texto descriptivo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Únete a miles de técnicos que ya aprobaron su certificación EPA 608 practicando con nuestro simulador. Empieza gratis y prepárate para el examen real.
          </p>

          {/* Botón CTA prominente */}
          <div className="flex justify-center px-2">
            <button
              onClick={() => setShowQuiz(true)}
              className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-4 md:py-5 lg:py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105 w-full sm:w-auto touch-manipulation"
            >
              Empieza a Practicar Gratis Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} EPA608Practice.org. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/es/contact"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Contacto
            </Link>
            <Link
              href="/es/terms"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href="/es/privacy"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacidad
            </Link>
        </div>
        </div>
      </footer>
    </div>
    </>
  );
}

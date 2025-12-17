'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { questions } from '../es/data';
import AuthModal from './AuthModal';
import LanguageSelector from './LanguageSelector';

const QUIZ_STORAGE_KEY = 'epa608_quiz_progress';
const QUIZ_STORAGE_KEY_ES = 'epa608_quiz_progress_es';

export default function QuizEs() {
  const { isSignedIn, isLoaded } = useUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [answers, setAnswers] = useState([]); // Track answers for persistence
  const [isRestoring, setIsRestoring] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = selectedAnswer !== null;
  
  // Calcular preguntas gratuitas respondidas (primeras 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);
  
  // Para usuarios premium, mostrar progreso total; para no premium, solo las primeras 3
  const totalQuestionsAnswered = isPremium ? answeredQuestions : freeQuestionsAnswered;

  // Guardar estado del quiz en localStorage (guardar en clave compartida para que el progreso persista entre idiomas)
  const saveQuizState = () => {
    try {
      const quizState = {
        currentQuestionIndex,
        correctAnswers,
        answeredQuestions,
        answers,
        timestamp: Date.now(),
      };
      // Guardar en clave compartida para que el progreso persista entre idiomas
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
      // También guardar en clave ES para compatibilidad hacia atrás
      localStorage.setItem(QUIZ_STORAGE_KEY_ES, JSON.stringify(quizState));
    } catch (error) {
      console.error('Error guardando estado del quiz:', error);
    }
  };

  // Restaurar estado del quiz desde localStorage (verificar clave compartida primero, luego clave específica de idioma)
  const restoreQuizState = () => {
    try {
      // Intentar clave compartida primero (funciona entre idiomas)
      let savedState = localStorage.getItem(QUIZ_STORAGE_KEY);
      // Si no se encuentra, intentar clave específica del idioma como respaldo
      if (!savedState) {
        savedState = localStorage.getItem(QUIZ_STORAGE_KEY_ES);
      }
      
      if (savedState) {
        const quizState = JSON.parse(savedState);
        // Solo restaurar si el estado es reciente (última hora)
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - quizState.timestamp < oneHour) {
          setCurrentQuestionIndex(quizState.currentQuestionIndex || 0);
          setCorrectAnswers(quizState.correctAnswers || 0);
          setAnsweredQuestions(quizState.answeredQuestions || 0);
          setAnswers(quizState.answers || []);
          return true;
        } else {
          // Limpiar estado antiguo de ambas claves
          localStorage.removeItem(QUIZ_STORAGE_KEY);
          localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
        }
      }
    } catch (error) {
      console.error('Error restaurando estado del quiz:', error);
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
    }
    return false;
  };

  // Limpiar estado del quiz de localStorage (limpiar ambas claves)
  const clearQuizState = () => {
    try {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
    } catch (error) {
      console.error('Error limpiando estado del quiz:', error);
    }
  };

  // Restaurar estado al montar y cuando el usuario inicia sesión
  useEffect(() => {
    if (!isLoaded) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:101',message:'useEffect triggered but isLoaded is false',data:{isLoaded,isSignedIn},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'A'})}).catch(()=>{});
      // #endregion
      return;
    }
    
    // Verificar si tenemos una bandera de redirección de autenticación
    const redirectFlag = localStorage.getItem('epa608_redirect_after_auth');
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:107',message:'useEffect triggered - checking sync',data:{isLoaded,isSignedIn,hasRedirectFlag:!!redirectFlag,redirectFlag},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Sincronizar usuario a la base de datos cuando inicia sesión (fallback si el webhook no está configurado)
    if (isSignedIn) {
      const syncKey = 'epa608_user_synced';
      const hasSynced = sessionStorage.getItem(syncKey);
      const syncInProgressKey = 'epa608_user_sync_in_progress';
      const syncInProgress = sessionStorage.getItem(syncInProgressKey);
      
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:115',message:'User is signed in, checking sync status',data:{isSignedIn,hasSynced,syncInProgress},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      
      if (!hasSynced && !syncInProgress) {
        // Marcar que la sincronización está en progreso para evitar llamadas duplicadas
        sessionStorage.setItem(syncInProgressKey, 'true');
        
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:118',message:'Starting user sync',data:{origin:window.location.origin,pathname:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'C'})}).catch(()=>{});
        // #endregion
        fetch('/api/users/sync', {
          method: 'POST',
        })
          .then(async res => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:123',message:'User sync response received',data:{status:res.status,ok:res.ok,contentType:res.headers.get('content-type')},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'D'})}).catch(()=>{});
            // #endregion
            
            // Verificar si la respuesta es HTML en lugar de JSON
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
              // #region agent log
              const text = await res.text();
              fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:128',message:'Response is not JSON',data:{status:res.status,contentType,preview:text.substring(0,200)},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'D'})}).catch(()=>{});
              // #endregion
              throw new Error(`Expected JSON but got ${contentType || 'unknown'}. Status: ${res.status}`);
            }
            
            return res.json();
          })
          .then(data => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:137',message:'User sync data parsed',data:{success:data.success,hasUser:!!data.user,error:data.error},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'D'})}).catch(()=>{});
            // #endregion
            if (data.success) {
              sessionStorage.setItem(syncKey, 'true');
            }
            // Remover la marca de sincronización en progreso
            sessionStorage.removeItem(syncInProgressKey);
          })
          .catch(error => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:144',message:'User sync error',data:{error:error.message,stack:error.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'D'})}).catch(()=>{});
            // #endregion
            console.error('Error syncing user:', error);
            // Remover la marca de sincronización en progreso incluso si hay error
            sessionStorage.removeItem(syncInProgressKey);
          });
      }
    } else {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:140',message:'User is NOT signed in',data:{isSignedIn,isLoaded,hasRedirectFlag:!!redirectFlag},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
    }
    
    if (redirectFlag) {
      // Hay flag de redirect - restaurar estado del quiz
      restoreQuizState();
      // Remover el flag si el usuario está autenticado
      if (isSignedIn) {
        localStorage.removeItem('epa608_redirect_after_auth');
      }
      setIsRestoring(false);
    } else if (isSignedIn) {
      // User is signed in but no redirect flag, try to restore anyway
      restoreQuizState();
      setIsRestoring(false);
    } else {
      // Not signed in, try to restore state (for users who might have state from before)
      restoreQuizState();
      setIsRestoring(false);
    }
  }, [isLoaded, isSignedIn]);
  
  // Polling para verificar cuando isSignedIn finalmente se actualiza después del redirect
  useEffect(() => {
    if (!isLoaded) return;
    
    const redirectFlag = localStorage.getItem('epa608_redirect_after_auth');
    if (redirectFlag && !isSignedIn) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:147',message:'Polling: redirect flag exists but user not signed in',data:{redirectFlag,isSignedIn,isLoaded},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
      
      // Forzar recarga del estado de autenticación después de un delay
      // Esto ayuda cuando Clerk tarda en actualizar el estado después del redirect
      const timeoutId = setTimeout(() => {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:153',message:'Timeout reached, checking if still not signed in before reload',data:{isSignedIn},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
        // Recargar la página si aún no está autenticado
        // Esto fuerza a Clerk a re-evaluar el estado de autenticación
        // Solo recargar si el flag todavía existe (no fue removido por otro proceso)
        if (!isSignedIn && localStorage.getItem('epa608_redirect_after_auth')) {
          // #region agent log
          fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:159',message:'Forcing page reload to refresh auth state',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
          // #endregion
          window.location.reload();
        }
      }, 2000);
      
      return () => clearTimeout(timeoutId);
    } else if (redirectFlag && isSignedIn) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz-es.js:167',message:'Polling: user signed in, removing redirect flag',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
      localStorage.removeItem('epa608_redirect_after_auth');
    }
  }, [isLoaded, isSignedIn]);

  // Guardar estado cuando cambie (pero no durante la restauración)
  useEffect(() => {
    if (!isRestoring && isLoaded && currentQuestionIndex > 0) {
      saveQuizState();
    }
  }, [currentQuestionIndex, correctAnswers, answeredQuestions, answers]);

  // Effect to show auth modal when reaching question 4 (index 3) and user is not signed in
  useEffect(() => {
    if (!isLoaded) return;
    
    // If user reaches question 4 (index 3) and is not signed in, show auth modal
    if (currentQuestionIndex === 3 && !isSignedIn) {
      setShowAuthModal(true);
    }
    
    // If user signs in, close auth modal - state is preserved automatically
    if (isSignedIn && showAuthModal) {
      setShowAuthModal(false);
      // User can now continue - the handleNext will work normally
    }
  }, [currentQuestionIndex, isSignedIn, isLoaded, showAuthModal]);

  // Efecto para mostrar el modal cuando se accede directamente a pregunta premium
  useEffect(() => {
    const question = questions[currentQuestionIndex];
    if (question && question.id === 21 && !isPremium) {
      setShowPremiumModal(true);
    }
  }, [currentQuestionIndex, isPremium]);

  const handleAnswerClick = (optionIndex) => {
    if (isAnswered) return; // No permitir cambiar la respuesta después de seleccionar

    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    // Verificar si la respuesta es correcta y actualizar contador
    const isCorrectAnswer = optionIndex === currentQuestion.correctAnswer;
    if (isCorrectAnswer) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    // Incrementar contador de preguntas respondidas
    setAnsweredQuestions(prev => prev + 1);
    
    // Guardar respuesta en array de respuestas para persistencia
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = {
        questionId: currentQuestion.id,
        selectedOption: optionIndex,
        isCorrect: isCorrectAnswer,
      };
      return newAnswers;
    });
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    // Verificar si la siguiente pregunta es la 21 (id: 21) y el usuario no es premium
    if (nextIndex < questions.length && questions[nextIndex].id === 21 && !isPremium) {
      setShowPremiumModal(true);
      return;
    }

    // Avanzar a la siguiente pregunta
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleCloseModal = () => {
    setShowPremiumModal(false);
    // El usuario se queda en la pregunta actual (no avanzamos si no es premium)
  };

  const handleUpgrade = () => {
    // Aquí iría la lógica de pago real
    setIsPremium(true);
    setShowPremiumModal(false);
    // Avanzar a la siguiente pregunta después de hacer premium
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">¡Felicidades!</h2>
          <p className="text-xl text-gray-700 mb-8">Has completado todas las preguntas disponibles.</p>
            <button
              onClick={() => {
                setCurrentQuestionIndex(0);
                setSelectedAnswer(null);
                setShowExplanation(false);
                setCorrectAnswers(0);
                setAnsweredQuestions(0);
                setAnswers([]);
                clearQuizState(); // Limpiar localStorage al reiniciar
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reiniciar Quiz
            </button>
        </div>
      </div>
    );
  }

  // Mostrar estado de carga mientras se restaura (solo brevemente)
  if (isRestoring && isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando tu progreso...</p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a 
            href="/es"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/es";
            }}
            className="cursor-pointer inline-block"
            style={{ textDecoration: 'none' }}
          >
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
          </a>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            {!isSignedIn && (
              <Link
                href="/es/pricing"
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Precios
              </Link>
            )}
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

      {/* Quiz Content with padding for navbar */}
      <div className="pt-20 sm:pt-24 p-4 md:p-8 relative">
        {/* Elementos decorativos de fondo - no interactivos */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradientes circulares sutiles */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        {/* Contenido del quiz */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header con progreso */}
          <div className="mb-4 sm:mb-6 md:mb-8">
          <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
            <span className="text-gray-600 text-sm sm:text-base font-medium">
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            {!isPremium && (
              <span className="text-blue-600 text-sm sm:text-base font-semibold">
                Modo Gratuito
              </span>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Pregunta con marcador a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Sección de Pregunta - Ocupa 2 columnas en desktop */}
          <div className="lg:col-span-2 order-1 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 leading-tight">
            {currentQuestion.text}
          </h2>

          {/* Opciones */}
          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 touch-manipulation min-h-[44px] flex items-center ";
              
              if (isAnswered) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "bg-green-500 border-green-600 text-white";
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonClass += "bg-red-500 border-red-600 text-white";
                } else {
                  buttonClass += "bg-gray-100 border-gray-200 text-gray-500";
                }
              } else {
                buttonClass += "bg-white border-gray-300 text-slate-900 active:border-blue-500 active:bg-blue-50 hover:border-blue-500 hover:bg-blue-50 cursor-pointer";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <span className="text-sm sm:text-base md:text-lg leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explicación */}
          {showExplanation && (
            <div className={`mt-6 p-4 rounded-lg border-2 ${
              isCorrect 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-start gap-3 mb-2">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✕</span>
                  </div>
                )}
                <div>
                  <h3 className={`font-semibold mb-1 ${
                    isCorrect ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {isCorrect ? '¡Correcto!' : 'Incorrecto'}
                  </h3>
                  <p className={`text-sm md:text-base ${
                    isCorrect ? 'text-green-800' : 'text-red-800'
                  }`}>
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
          </div>

          {/* Botón Siguiente - Antes del score en móvil, después en desktop */}
          {isAnswered && (
            <div className="order-2 lg:order-3 lg:col-span-3 flex justify-end mt-4 sm:mt-6 lg:mt-0">
              <button
                onClick={handleNext}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 touch-manipulation min-w-[120px]"
              >
                {currentQuestionIndex + 1 < questions.length ? 'Siguiente' : 'Finalizar'}
              </button>
            </div>
          )}

          {/* Marcador de puntuación - 1 columna en desktop */}
          <div className="lg:col-span-1 order-3 lg:order-2">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-4">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Tu Progreso</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Completadas:</span>
                  <span className="text-green-600 font-semibold text-sm sm:text-base">{currentQuestionIndex + 1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Restantes:</span>
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">
                    {questions.length - (currentQuestionIndex + 1)}
                    {!isPremium && currentQuestionIndex + 1 < 20 && ` gratis`}
                  </span>
                </div>
                {!isPremium && currentQuestionIndex + 1 >= 20 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-blue-600 text-xs sm:text-sm text-center font-medium leading-tight">
                      💡 Has completado la prueba gratuita. Desbloquea más preguntas para continuar.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          </div>
      </div>

      {/* Modal Premium con PricingSection */}
      {showPremiumModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl max-w-2xl w-full my-2 sm:my-4 md:my-8 shadow-2xl relative max-h-[95vh] overflow-y-auto">
            {/* Botón cerrar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-white rounded-full p-2 hover:bg-gray-100 active:bg-gray-200 transition-colors shadow-lg touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mensaje de completado */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 rounded-t-2xl">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  ¡Has completado las 20 preguntas gratuitas!
                </h3>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-3">
                  <p className="text-blue-100 text-sm sm:text-base">
                    Desbloquea 300+ preguntas para continuar practicando y asegurar tu aprobación en el examen EPA 608.
                  </p>
                </div>
              </div>
            </div>

            {/* PricingSection integrado */}
            <div className="p-4 sm:p-6">
              <div className="bg-white border-2 border-blue-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
                {/* Badge Superior */}
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ⚡ OFERTA FLASH: 60% DE DESCUENTO
                  </span>
                </div>

                {/* Título */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
                  Acceso de Por Vida
                </h2>

                {/* Precio */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                    <span className="text-lg sm:text-xl text-gray-500 line-through">
                      $29.99
                    </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
                      $11.99
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Pago único. Sin suscripciones mensuales.
                  </p>
                </div>

                {/* Lista de Beneficios */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      Acceso ilimitado al Simulador
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      Banco de 300+ Preguntas Reales
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      Explicaciones detalladas de cada respuesta
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      Modo Examen Cronometrado
                    </span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700">
                      Garantía: Aprueba o te devolvemos tu dinero
                    </span>
                  </div>
                </div>

                {/* Botón CTA */}
                <button
                  onClick={handleUpgrade}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-[1.02] mb-3 touch-manipulation min-h-[48px]"
                >
                  Obtener Acceso Inmediato
                </button>

                {/* Texto de Escasez */}
                <p className="text-center text-xs sm:text-sm text-red-600 font-semibold mb-4">
                  🔥 Alta Demanda: Solo quedan 14 licencias con descuento
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pago Seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    <span>Acceso Instantáneo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-blue-600" />
                    <span>Garantía de Devolución</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

          {/* Auth Modal - Cannot be closed, shows when trying to access question 4 */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => {
          // Only close if user is signed in
          if (isSignedIn) {
            setShowAuthModal(false);
          }
        }}
        language="es"
      />
      </div>
     
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
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
  const [isLoadingFromDatabase, setIsLoadingFromDatabase] = useState(false);
  const [hasLoadedFromDatabase, setHasLoadedFromDatabase] = useState(false);
  const prevIsSignedInRef = useRef(null);
  const justLoggedOutRef = useRef(false);
  const isSavingRef = useRef(false); // Prevenir doble guardado en handleNext
  const hasRestoredRef = useRef(false); // Prevenir restauración repetida mientras el usuario responde
  const prevSignedInForRestoreRef = useRef(null); // Resetear restore guard al cambiar auth state
  
  // Estado para preguntas cargadas desde la API
  const [questions, setQuestions] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [questionsError, setQuestionsError] = useState(null);
  const [limitApplied, setLimitApplied] = useState(3);
  
  // Refs para prevenir múltiples fetches
  const hasLoadedQuestionsRef = useRef(false);
  const isLoadingQuestionsRef = useRef(false);
  const loadQuestionsKeyRef = useRef(null);
  const prevIsSignedInForQuestionsRef = useRef(isSignedIn);

  // Cargar preguntas desde la API (solo una vez por combinación de parámetros)
  useEffect(() => {
    if (!isLoaded) return;
    
    // Si isSignedIn cambió de false a true, resetear ref para forzar recarga
    if (prevIsSignedInForQuestionsRef.current === false && isSignedIn === true) {
      hasLoadedQuestionsRef.current = false;
    }
    prevIsSignedInForQuestionsRef.current = isSignedIn;
    
    // Crear una key única para esta combinación de parámetros
    const loadKey = `${isSignedIn ? 'auth' : 'anon'}-es`;
    
    // Si ya se cargaron preguntas para esta key, no volver a cargar
    if (hasLoadedQuestionsRef.current === loadKey) {
      setIsLoadingQuestions(false);
      return;
    }
    
    // Si ya hay una carga en progreso para la misma key, no iniciar otra
    if (isLoadingQuestionsRef.current && loadQuestionsKeyRef.current === loadKey) {
      return;
    }

    // Marcar inmediatamente que estamos cargando (antes del async)
    isLoadingQuestionsRef.current = true;
    loadQuestionsKeyRef.current = loadKey;

    const loadQuestions = async () => {
      setIsLoadingQuestions(true);
      setQuestionsError(null);
      
      try {
        const response = await fetch('/api/questions?lang=es&category=ALL', { 
          cache: 'no-store' 
        });
        
        if (!response.ok) {
          throw new Error('Failed to load questions');
        }
        
        const data = await response.json();
        
        if (data.success) {
          setQuestions(data.questions || []);
          setIsPremium(data.isPremium || false);
          setLimitApplied(data.limitApplied || 3);
          // Marcar que ya se cargaron para esta key
          hasLoadedQuestionsRef.current = loadKey;
        } else {
          throw new Error(data.error || 'Failed to load questions');
        }
      } catch (error) {
        console.error('Error loading questions:', error);
        setQuestionsError(error.message);
        // Si hay error, permitir reintento (resetear la key)
        hasLoadedQuestionsRef.current = null;
      } finally {
        setIsLoadingQuestions(false);
        isLoadingQuestionsRef.current = false;
        // Solo limpiar la key si no es la misma que estamos cargando
        if (loadQuestionsKeyRef.current === loadKey) {
          loadQuestionsKeyRef.current = null;
        }
      }
    };

    loadQuestions();
    
    // Cleanup: si el componente se desmonta o cambian las dependencias antes de completar
    return () => {
      // No limpiar hasLoadedQuestionsRef aquí porque queremos mantener el cache
      // Solo limpiar si cambió la key
      if (loadQuestionsKeyRef.current === loadKey) {
        isLoadingQuestionsRef.current = false;
        loadQuestionsKeyRef.current = null;
      }
    };
  }, [isLoaded, isSignedIn, isLoadingQuestions, questions.length, isLoadingFromDatabase, hasLoadedFromDatabase, isRestoring]);

  const availableQuestions = questions;
  // Para el UI: usuarios anónimos ven 20 preguntas, aunque solo tengan acceso a 3
  // Para usuarios logueados no premium: 20, para premium: todas
  const displayQuestionCount = isPremium 
    ? (limitApplied === Infinity ? questions.length : limitApplied)
    : (!isSignedIn ? 20 : (limitApplied === Infinity ? questions.length : limitApplied));
  const currentQuestion = availableQuestions[currentQuestionIndex];
  const isAnswered = selectedAnswer !== null;

  // IMPORTANTE (regresión evitada: conteo incorrecto al cambiar idioma EN <-> ES):
  // - En un bug previo, el UI en ES mostraba "Completadas" como `currentQuestionIndex + 1`.
  // - Pero `currentQuestionIndex` (posición actual) NO siempre coincide con `answeredQuestions` (total respondidas),
  //   especialmente cuando se restaura desde DB o al cambiar de idioma (pueden existir saltos/ajustes de índice).
  // - Fuente de verdad para "Completadas" debe ser `answeredQuestions` (DB: `total_answered`).
  
  // Calcular preguntas gratuitas respondidas (primeras 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);
  
  // Para usuarios premium, mostrar progreso total; para no premium, solo las primeras 3
  const totalQuestionsAnswered = isPremium ? answeredQuestions : freeQuestionsAnswered;


  // Guardar estado del quiz en localStorage (guardar en clave compartida para que el progreso persista entre idiomas)
  const saveQuizState = () => {
    try {
      // Filter out nulls and invalid entries before saving
      const compact = Array.isArray(answers) ? answers.filter(a => a != null && a.questionId != null) : [];
      const quizState = {
        currentQuestionIndex,
        correctAnswers,
        answeredQuestions,
        answers: compact,
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

  // Guardar progreso del quiz en Supabase
  //
  // IMPORTANTE (regresión evitada: progreso "1 por detrás" entre computadoras):
  // - En un bug previo, el usuario contestaba 11 preguntas en una PC, pero al loguearse en otra PC veía 10.
  // - Causa: `setAnsweredQuestions`/`setCorrectAnswers` en React son async; si el POST usa el state actual,
  //   se envía el valor anterior (stale) al backend.
  // - Solución: soportar `saveProgressToDatabase(override)` y desde `handleNext` enviar valores post-respuesta.
  //
  // Si modificas `handleNext` en el futuro, asegúrate de mantener este patrón.
  const saveProgressToDatabase = async (override) => {
    if (!isSignedIn || !isLoaded || isLoadingFromDatabase || !hasLoadedFromDatabase) {
      return;
    }

    try {
      // Usar override si se provee (valores post-respuesta) para evitar state lag.
      const payload = {
        currentQuestionIndex: typeof override?.currentQuestionIndex === 'number' ? override.currentQuestionIndex : currentQuestionIndex,
        correctAnswers: typeof override?.correctAnswers === 'number' ? override.correctAnswers : correctAnswers,
        totalAnswered: typeof override?.totalAnswered === 'number' ? override.totalAnswered : answeredQuestions,
      };
      const response = await fetch('/api/quiz/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || 'Failed to save progress');
      }

      const data = await response.json();
    } catch (error) {
      console.error('Error guardando progreso en la base de datos:', error);
    }
  };

  // Cargar progreso del quiz desde Supabase
  const loadProgressFromDatabase = async () => {
    if (!isSignedIn || !isLoaded) {
      return null;
    }

    try {
      const response = await fetch('/api/quiz/progress', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      if (data.success && data.progress) {
        return {
          currentQuestionIndex: data.progress.current_question_index || 0,
          correctAnswers: data.progress.correct_answers || 0,
          answeredQuestions: data.progress.total_answered || 0,
          answers: [], // No guardamos respuestas individuales en DB, solo progreso
        };
      }

      return null;
    } catch (error) {
      console.error('Error cargando progreso desde la base de datos:', error);
      return null;
    }
  };

  // Restaurar estado del quiz desde localStorage (verificar clave compartida primero, luego clave específica de idioma)
  const restoreQuizState = () => {
    // Verificar si acabamos de desloguear - si es así, no restaurar nada
    const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out') || justLoggedOutRef.current;
    if (justLoggedOut && !isSignedIn) {
      // Don't clear the flag here - let the useEffect handle it
      return false;
    }
    
    // Si el usuario no está autenticado, no restaurar desde localStorage
    // Esto previene restaurar progreso antiguo después del logout
    if (!isSignedIn) {
      return false;
    }

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
          // Filter out nulls and invalid entries to ensure safe access
          const rawAnswers = quizState.answers || [];
          const safeAnswers = Array.isArray(rawAnswers) 
            ? rawAnswers.filter(a => a != null && a.questionId != null)
            : [];
          setAnswers(safeAnswers);
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

  // Reiniciar progreso del quiz cuando el usuario se desloguea - DEBE ejecutarse ANTES del useEffect de restauración
  useEffect(() => {
    if (!isLoaded) return;

    // Solo reiniciar si el usuario estaba autenticado y ahora no lo está (logout real)
    if (prevIsSignedInRef.current === true && !isSignedIn) {
      // Establecer flag PRIMERO para evitar que restoreQuizState lea datos antiguos
      sessionStorage.setItem('epa608_just_logged_out', 'true');
      justLoggedOutRef.current = true;
      // Limpiar localStorage para evitar que restoreQuizState lea datos antiguos
      clearQuizState();
      // Limpiar flag de redirect para evitar auto-redirect al quiz
      localStorage.removeItem('epa608_redirect_after_auth');
      // Reiniciar estado
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setAnsweredQuestions(0);
      setAnswers([]);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setHasLoadedFromDatabase(false);
      setIsRestoring(false);
      hasRestoredRef.current = false;
      
      // Limpiar el flag después de un delay para permitir que restoreQuizState lo verifique
      // Usar setTimeout para asegurar que todas las llamadas pendientes a restoreQuizState tengan oportunidad de verificar el flag
      setTimeout(() => {
        sessionStorage.removeItem('epa608_just_logged_out');
        justLoggedOutRef.current = false;
      }, 1000);
    }

    // Actualizar ref para rastrear el estado actual para el siguiente render
    prevIsSignedInRef.current = isSignedIn;
  }, [isLoaded, isSignedIn]);

  // Restaurar estado al montar y cuando el usuario inicia sesión
  useEffect(() => {
    if (!isLoaded) return;


    // CRITICAL (bug cambio de idioma):
    // Si este effect corre cuando todavía NO hay preguntas cargadas (availableQuestions.length===0),
    // algunos clamps como `Math.min(..., availableQuestions.length - 1)` pueden producir -1.
    // Luego, cuando las preguntas cargan, el componente puede renderizar el estado de "¡Felicidades!"
    // porque `currentQuestion` queda undefined en index -1. Por eso, esperamos a que haya preguntas.
    if (isSignedIn && (isLoadingQuestions || availableQuestions.length === 0)) {
      return;
    }

    // IMPORTANTE (regresión evitada):
    // - Cuando el usuario pasa de ANÓNIMO -> LOGUEADO, debemos continuar donde iba (pregunta 4 tras 3 anónimas).
    // - En un bug previo, el guard `hasRestoredRef` bloqueaba la restauración mientras aún no había preguntas
    //   (`availableQuestions.length===0` / `isLoadingQuestions===true`). Eso hacía que, tras el login, el quiz
    //   no migrara el progreso y reiniciara en la pregunta 1.
    // Por eso:
    // - Reseteamos el guard cuando cambia `isSignedIn`.
    // - Y solo permitimos el "short-circuit" cuando ya hay preguntas cargadas.
    //
    // Si el usuario se loguea después de 3 anónimas, debe continuar en la pregunta 4.
    //
    // Si cambia el estado de auth (anon -> signed in o viceversa), permitir una restauración
    if (prevSignedInForRestoreRef.current !== isSignedIn) {
      hasRestoredRef.current = false;
      prevSignedInForRestoreRef.current = isSignedIn;
    }

    // Prevenir restauración repetida (por ejemplo, mientras el usuario responde)
    // IMPORTANTE: no bloquear mientras las preguntas aún no cargaron, o se puede perder la migración post-login
    if (hasRestoredRef.current && availableQuestions.length > 0 && !isLoadingQuestions && !isLoadingFromDatabase) {
      setIsRestoring(false);
      return;
    }

    // Verificar si acabamos de desloguear - si es así, no restaurar nada
    const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out') || justLoggedOutRef.current;
    if (justLoggedOut && !isSignedIn) {
      // Don't clear the flag yet - keep it for restoreQuizState to check
      setIsRestoring(false);
      return;
    }

    // Verificar si tenemos una bandera de redirección de autenticación
    const redirectFlag = localStorage.getItem('epa608_redirect_after_auth');

    // Sincronizar usuario a la base de datos cuando inicia sesión (fallback si el webhook no está configurado)
    if (isSignedIn) {
      const syncKey = 'epa608_user_synced';
      const hasSynced = sessionStorage.getItem(syncKey);
      const syncInProgressKey = 'epa608_user_sync_in_progress';
      const syncInProgress = sessionStorage.getItem(syncInProgressKey);

      if (!hasSynced && !syncInProgress) {
        // Marcar que la sincronización está en progreso para evitar llamadas duplicadas
        sessionStorage.setItem(syncInProgressKey, 'true');

        fetch('/api/users/sync', {
          method: 'POST',
        })
          .then(async res => {
            // Verificar si la respuesta es HTML en lugar de JSON
            const contentType = res.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
              const text = await res.text();
              throw new Error(`Expected JSON but got ${contentType || 'unknown'}. Status: ${res.status}`);
            }
            
            return res.json();
          })
          .then(async (data) => {
            if (data.success) sessionStorage.setItem(syncKey, 'true');
            sessionStorage.removeItem(syncInProgressKey);
            
            // Después de sincronizar, cargar progreso desde la base de datos (priorizar DB sobre localStorage)
            setIsLoadingFromDatabase(true);
            const dbProgress = await loadProgressFromDatabase();
            if (dbProgress) {
              // Define server progress values
              const serverAnswered = dbProgress.answeredQuestions ?? 0;
              const serverIndex = dbProgress.currentQuestionIndex ?? 0;
              const hasServerProgress = serverAnswered > 0 || serverIndex > 0;
              
              let restoredAnswers = [];
              let restoredIndex;
              
              if (hasServerProgress) {
                // Si hay progreso en servidor, SIEMPRE priorizar DB y ignorar localStorage
                clearQuizState();
                restoredAnswers = [];
                restoredIndex = Math.min(Math.max(serverIndex, 0), questions.length - 1);
              } else {
                // Solo si NO hay progreso en servidor (usuario nuevo), intentar usar localStorage para migrar las 3 anónimas
                let localStorageAnswers = [];
                try {
                  const savedState = localStorage.getItem(QUIZ_STORAGE_KEY) || localStorage.getItem(QUIZ_STORAGE_KEY_ES);
                  if (savedState) {
                    const quizState = JSON.parse(savedState);
                    localStorageAnswers = quizState.answers || [];
                  }
                } catch (e) {
                  console.error("Error reading localStorage for answers:", e);
                }
                
                clearQuizState();
                restoredAnswers = localStorageAnswers.length > 0 ? localStorageAnswers : [];
                restoredIndex = Math.min(Math.max(dbProgress.currentQuestionIndex || 0, 0), questions.length - 1);
              }
              
              setCurrentQuestionIndex(restoredIndex);
              setCorrectAnswers(dbProgress.correctAnswers);
              setAnsweredQuestions(dbProgress.answeredQuestions || 0);
              setAnswers(restoredAnswers);
              // Actualizar localStorage con el progreso de DB
              saveQuizState();
            } else {
              // No hay progreso en DB, intentar localStorage
              restoreQuizState();
            }
            setIsLoadingFromDatabase(false);
            setHasLoadedFromDatabase(true);
            setIsRestoring(false);
            hasRestoredRef.current = true;
          })
          .catch((error) => {
            console.error('Error syncing user:', error);
            sessionStorage.removeItem(syncInProgressKey);
            // En caso de error, usar localStorage como respaldo
            restoreQuizState();
            setIsRestoring(false);
            hasRestoredRef.current = true;
          });
      } else if (hasSynced) {
        // Usuario ya sincronizado, cargar progreso desde la base de datos
        setIsLoadingFromDatabase(true);
        loadProgressFromDatabase().then((dbProgress) => {
          if (dbProgress) {
            // Define server progress values
            const serverAnswered = dbProgress.answeredQuestions ?? 0;
            const serverIndex = dbProgress.currentQuestionIndex ?? 0;
            const hasServerProgress = serverAnswered > 0 || serverIndex > 0;
            
            let restoredAnswers = [];
            let restoredIndex;
            
            if (hasServerProgress) {
              // Si hay progreso en servidor, SIEMPRE priorizar DB y ignorar localStorage
              clearQuizState();
              restoredAnswers = [];
              restoredIndex = Math.min(Math.max(serverIndex, 0), availableQuestions.length - 1);
            } else {
              // Solo si NO hay progreso en servidor (usuario nuevo), intentar usar localStorage para migrar las 3 anónimas
              let localStorageAnswers = [];
              try {
                const savedState = localStorage.getItem(QUIZ_STORAGE_KEY) || localStorage.getItem(QUIZ_STORAGE_KEY_ES);
                if (savedState) {
                  const quizState = JSON.parse(savedState);
                  const rawAnswers = quizState.answers || [];
                  localStorageAnswers = Array.isArray(rawAnswers) 
                    ? rawAnswers.filter(a => a != null && a.questionId != null)
                    : [];
                }
              } catch (e) {
                console.error("Error reading localStorage for answers:", e);
              }
              
              clearQuizState();
              restoredAnswers = localStorageAnswers;
              restoredIndex = Math.min(Math.max(dbProgress.currentQuestionIndex || 0, 0), availableQuestions.length - 1);
            }
            
            setCurrentQuestionIndex(restoredIndex);
            setCorrectAnswers(dbProgress.correctAnswers);
            setAnsweredQuestions(dbProgress.answeredQuestions || 0);
            setAnswers(restoredAnswers);
            saveQuizState();
          } else {
            restoreQuizState();
          }
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          setIsRestoring(false);
          hasRestoredRef.current = true;
        }).catch(() => {
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          restoreQuizState();
          setIsRestoring(false);
          hasRestoredRef.current = true;
        });
      } else {
        // Sincronización en progreso, esperar un poco e intentar localStorage
        restoreQuizState();
        setIsRestoring(false);
        hasRestoredRef.current = true;
      }
    } else {
      // No autenticado, verificar si acabamos de desloguear
      const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out');
      
      // Si el usuario acabó de desloguear, no restaurar desde localStorage
      if (justLoggedOut) {
        // Don't clear the flag here - keep it for restoreQuizState to check
        setIsRestoring(false);
      } else if (redirectFlag) {
        restoreQuizState();
        setIsRestoring(false);
      } else {
        restoreQuizState();
        setIsRestoring(false);
      }
      hasRestoredRef.current = true;
    }
  }, [isLoaded, isSignedIn, isLoadingQuestions, availableQuestions.length, isLoadingFromDatabase]);

  // CRITICAL (safety net): nunca permitir índices negativos cuando ya hay preguntas cargadas.
  // Esto evita que se renderice el mensaje de "¡Felicidades!" por un index inválido al cambiar de idioma.
  useEffect(() => {
    if (!isLoaded || isLoadingQuestions) return;
    if (availableQuestions.length > 0 && currentQuestionIndex < 0) {
      setCurrentQuestionIndex(0);
    } else if (availableQuestions.length > 0 && currentQuestionIndex >= availableQuestions.length) {
      setCurrentQuestionIndex(availableQuestions.length - 1);
    }
  }, [isLoaded, isLoadingQuestions, availableQuestions.length, currentQuestionIndex]);
  
  // Polling para verificar cuando isSignedIn finalmente se actualiza después del redirect
  useEffect(() => {
    if (!isLoaded) return;
    
    const redirectFlag = localStorage.getItem('epa608_redirect_after_auth');
    if (redirectFlag && !isSignedIn) {
      // Forzar recarga del estado de autenticación después de un delay
      // Esto ayuda cuando Clerk tarda en actualizar el estado después del redirect
      const timeoutId = setTimeout(() => {
        // Recargar la página si aún no está autenticado
        // Esto fuerza a Clerk a re-evaluar el estado de autenticación
        // Solo recargar si el flag todavía existe (no fue removido por otro proceso)
        if (!isSignedIn && localStorage.getItem('epa608_redirect_after_auth')) {
          window.location.reload();
        }
      }, 2000);
      
      return () => clearTimeout(timeoutId);
    } else if (redirectFlag && isSignedIn) {
      localStorage.removeItem('epa608_redirect_after_auth');
    }
  }, [isLoaded, isSignedIn]);


  // Guardar estado en localStorage cuando cambie (pero no durante la restauración)
  // NOTE: El guardado en base de datos ahora se maneja en handleNext para evitar spam
  useEffect(() => {
    if (!isRestoring && isLoaded && currentQuestionIndex > 0) {
      saveQuizState();
      // NO llamar saveProgressToDatabase aquí - se hace desde handleNext
    }
  }, [currentQuestionIndex, correctAnswers, answeredQuestions, answers, isSignedIn, isLoaded]);

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
    if (!currentQuestion) return;

    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    // Guardar respuesta en array de respuestas para persistencia (pero no incrementar contadores aún)
    const isCorrectAnswer = optionIndex === currentQuestion.correct_answer;
    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = {
        questionId: currentQuestion.source_id,
        selectedOption: optionIndex,
        isCorrect: isCorrectAnswer,
      };
      return newAnswers;
    });
  };

  const handleNext = () => {
    // Validar que selectedAnswer no sea null
    if (selectedAnswer === null || !currentQuestion) {
      return;
    }

    // Calcular isCorrect
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;

    // IMPORTANTE (cross-device): calcular valores post-respuesta para el POST.
    // No usar `answeredQuestions`/`correctAnswers` directamente después de setState porque pueden ir 1 por detrás.
    const nextIndex = currentQuestionIndex + 1;
    const nextAnswered = answeredQuestions + 1;
    const nextCorrect = correctAnswers + (isCorrect ? 1 : 0);

    const persistProgress = async () => {
      if (!isSignedIn) return;
      if (isSavingRef.current) return;
      isSavingRef.current = true;
      try {
        await saveProgressToDatabase({
          currentQuestionIndex: nextIndex,
          correctAnswers: nextCorrect,
          totalAnswered: nextAnswered,
        });
      } finally {
        isSavingRef.current = false;
      }
    };

    // AHÍ incrementar contadores
    setAnsweredQuestions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    
    // Avanzar a la siguiente pregunta
    if (nextIndex < questions.length) {
      // Avanzar índice
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);

      // AHÍ guardar en DB una sola vez (con guard para evitar doble envío)
      saveQuizState();
      persistProgress();
    } else {
      // End of quiz - save progress
      saveQuizState();
      persistProgress();
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

  // Mostrar estado de carga mientras se cargan las preguntas
  if (isLoadingQuestions) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  // Mostrar error si hay problema cargando preguntas
  if (questionsError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error cargando preguntas</h2>
          <p className="text-gray-700 mb-4">{questionsError}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Recargar
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

  const isCorrect = currentQuestion && selectedAnswer !== null
    ? selectedAnswer === currentQuestion.correct_answer
    : false;

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
              Pregunta {currentQuestionIndex + 1} de {displayQuestionCount}
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
              style={{ width: `${((currentQuestionIndex + 1) / displayQuestionCount) * 100}%` }}
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
              
              if (isAnswered && currentQuestion) {
                if (index === selectedAnswer) {
                  buttonClass += isCorrect
                    ? "bg-green-500 border-green-600 text-white"
                    : "bg-red-500 border-red-600 text-white";
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
                {currentQuestionIndex + 1 < displayQuestionCount ? 'Siguiente' : 'Finalizar'}
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
                  {/* IMPORTANTE: usar answeredQuestions (progreso real) en vez de currentQuestionIndex+1.
                      `currentQuestionIndex` puede diferir de `total_answered` (DB) y causar discrepancias al cambiar de idioma. */}
                  <span className="text-green-600 font-semibold text-sm sm:text-base">{answeredQuestions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Restantes:</span>
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">
                    {Math.max(displayQuestionCount - answeredQuestions, 0)}
                    {!isPremium && answeredQuestions < 20 && ` gratis`}
                  </span>
                </div>
                {!isPremium && answeredQuestions >= 20 && (
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

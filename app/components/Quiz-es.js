'use client';

import { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { useUser, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import AuthModal from './AuthModal';
import LanguageSelector from './LanguageSelector';

const QUIZ_STORAGE_KEY = 'epa608_quiz_progress';
const QUIZ_STORAGE_KEY_ES = 'epa608_quiz_progress_es';

// Mapeo de initialType a category de BD
const TYPE_TO_CATEGORY = {
  'core': 'CORE',
  'type1': 'TYPE1',
  'type2': 'TYPE2',
  'type3': 'TYPE3',
  'universal': 'UNIVERSAL'
};

// Categorías en orden para modo universal
const UNIVERSAL_CATEGORIES = ['CORE', 'TYPE1', 'TYPE2', 'TYPE3'];

// Títulos de categoría para mostrar
const CATEGORY_TITLES = {
  'CORE': 'CORE',
  'TYPE1': 'TYPE I',
  'TYPE2': 'TYPE II',
  'TYPE3': 'TYPE III',
  'UNIVERSAL': 'UNIVERSAL',
  'ALL': 'ALL'
};

export default function QuizEs({ initialType, questionLimit = null }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoadingCheckout, setIsLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
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
  
  // Estado para categorías
  const [currentCategory, setCurrentCategory] = useState(() => {
    // Determinar categoría inicial basada en initialType
    if (initialType === 'universal') {
      return 'CORE'; // Empezar con CORE en modo universal
    } else if (initialType && TYPE_TO_CATEGORY[initialType]) {
      return TYPE_TO_CATEGORY[initialType];
    }
    return 'CORE'; // Default: CORE para las 20 preguntas gratuitas
  });
  
  const [isUniversalMode, setIsUniversalMode] = useState(initialType === 'universal');
  const [universalCategoryIndex, setUniversalCategoryIndex] = useState(0);

  // Cargar preguntas desde la API (solo una vez por combinación de parámetros)
  useEffect(() => {
    if (!isLoaded) return;
    
    // Si isSignedIn cambió de false a true, resetear ref para forzar recarga
    if (prevIsSignedInForQuestionsRef.current === false && isSignedIn === true) {
      hasLoadedQuestionsRef.current = false;
    }
    prevIsSignedInForQuestionsRef.current = isSignedIn;
    
    // Crear una key única para esta combinación de parámetros (incluyendo category y questionLimit)
    const limitKey = questionLimit !== null ? `-limit${questionLimit}` : '';
    const loadKey = `${isSignedIn ? 'auth' : 'anon'}-es-${currentCategory}${limitKey}`;
    
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
        /**
         * DEEP LINKING: Construir URL con parámetro limit
         * 
         * Cuando viene de deep linking (questionLimit !== null), agregamos el parámetro
         * limit a la URL de la API para que el servidor devuelva solo ese número de preguntas.
         * 
         * IMPORTANTE: Solo agregar limit si:
         * 1. questionLimit no es null (viene de deep linking)
         * 2. El usuario está autenticado (los anónimos siempre ven 3 preguntas)
         */
        // Construir URL con limit si questionLimit está presente
        let apiUrl = `/api/questions?lang=es&category=${currentCategory}`;
        if (questionLimit !== null && isSignedIn) {
          apiUrl += `&limit=${questionLimit}`;
        }
        const response = await fetch(apiUrl, { 
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
  }, [isLoaded, isSignedIn, currentCategory, questionLimit]);

  const availableQuestions = questions;
  // Para el UI: usuarios anónimos ven 20 preguntas, aunque solo tengan acceso a 3
  // Para usuarios logueados no premium: usar questionLimit si viene (deep linking), sino 20, para premium: todas
  const displayQuestionCount = isPremium 
    ? (limitApplied === Infinity ? questions.length : limitApplied)
    : (questionLimit !== null ? questionLimit : (!isSignedIn ? 20 : (limitApplied === Infinity ? questions.length : limitApplied)));
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
  //
  // IMPORTANTE (regresión evitada: login con email en ES mostraba "2 completadas" en vez de 3):
  // - En algunos flujos de Clerk, el login con email puede causar recarga/redirección completa.
  // - Si el usuario responde la 3ra pregunta y mostramos el modal de auth ANTES de que React aplique
  //   `setAnsweredQuestions(prev => prev + 1)`, el state en ese tick sigue siendo 2 ("stale").
  // - Si en ese momento llamamos a `saveQuizState()` sin override, persistimos 2.
  // - Tras la recarga, el quiz restaura desde localStorage y el usuario ve 2 completadas.
  //
  // Regla: cuando necesites persistir progreso en el MISMO tick donde acabas de contestar una pregunta,
  // usa `saveQuizState({ answeredQuestions: nextAnswered, correctAnswers: nextCorrect, currentQuestionIndex: nextIndex })`.
  const saveQuizState = (override) => {
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      // Filter out nulls and invalid entries before saving
      const compact = Array.isArray(answers) ? answers.filter(a => a != null && a.questionId != null) : [];
      const quizState = {
        currentQuestionIndex: typeof override?.currentQuestionIndex === 'number' ? override.currentQuestionIndex : currentQuestionIndex,
        correctAnswers: typeof override?.correctAnswers === 'number' ? override.correctAnswers : correctAnswers,
        answeredQuestions: typeof override?.answeredQuestions === 'number' ? override.answeredQuestions : answeredQuestions,
        answers: compact,
        timestamp: Date.now(),
        category: currentCategory, // Guardar categoría actual
      };
      
      // Guardar en key específica de categoría
      const categoryKey = `${QUIZ_STORAGE_KEY}_${currentCategory}`;
      localStorage.setItem(categoryKey, JSON.stringify(quizState));
      
      // También guardar en clave compartida para compatibilidad (mapea a ALL)
      if (currentCategory === 'ALL') {
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
        // También guardar en clave ES para compatibilidad hacia atrás
        localStorage.setItem(QUIZ_STORAGE_KEY_ES, JSON.stringify(quizState));
      }
    } catch (error) {
      console.error('Error guardando estado del quiz:', error);
    }
  };

  /**
   * GUARDAR PROGRESO DEL QUIZ EN LA BASE DE DATOS (Versión en Español)
   * 
   * IMPORTANTE (regresión evitada: progreso "1 por detrás" entre computadoras):
   * - En un bug previo, el usuario contestaba 11 preguntas en una PC, pero al loguearse en otra PC veía 10.
   * - Causa: `setAnsweredQuestions`/`setCorrectAnswers` en React son async; si el POST usa el state actual,
   *   se envía el valor anterior (stale) al backend.
   * - Solución: soportar `saveProgressToDatabase(override)` y desde `handleNext` enviar valores post-respuesta.
   * 
   * DEEP LINKING: El progreso se guarda con la categoría correcta (TYPE1, TYPE2, TYPE3, CORE)
   * para que se restaure correctamente cuando el usuario vuelve mediante deep linking.
   * 
   * ⚠️ Si modificas `handleNext` en el futuro, asegúrate de:
   * - No volver a enviar al backend valores "stale"
   * - Incluir siempre `category: currentCategory` en el payload
   * - Usar el parámetro `override` para enviar valores post-respuesta
   */
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
        category: currentCategory, // CRÍTICO: Incluir categoría para que el progreso se restaure correctamente en deep linking
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

  /**
   * CARGAR PROGRESO DEL QUIZ DESDE LA BASE DE DATOS (Versión en Español)
   * 
   * DEEP LINKING: El progreso se carga usando la categoría correcta (TYPE1, TYPE2, TYPE3, CORE)
   * para que se restaure correctamente cuando el usuario vuelve mediante deep linking.
   * 
   * IMPORTANTE: La categoría debe coincidir exactamente con la que se usó para guardar el progreso.
   * Por ejemplo, si el usuario avanzó en un quiz de TYPE1, el progreso se guarda con category="TYPE1"
   * y se restaura cuando vuelve a ?quiz=1&type=type1.
   */
  const loadProgressFromDatabase = async () => {
    if (!isSignedIn || !isLoaded) {
      return null;
    }

    try {
      // CRÍTICO: Incluir category en la query para restaurar el progreso correcto según el tipo de quiz
      const response = await fetch(`/api/quiz/progress?category=${currentCategory}`, {
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
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a sessionStorage/localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return false;
    }
    
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
      // Primero intentar key específica de categoría
      const categoryKey = `${QUIZ_STORAGE_KEY}_${currentCategory}`;
      let savedState = localStorage.getItem(categoryKey);
      
      // Si no se encuentra, intentar key compartida (para compatibilidad con progreso antiguo)
      if (!savedState) {
        savedState = localStorage.getItem(QUIZ_STORAGE_KEY);
      }
      // Si aún no se encuentra, intentar key de español como último recurso
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

  // Limpiar estado del quiz de localStorage (limpiar key específica de categoría y keys compartidas)
  const clearQuizState = () => {
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return;
    }
    
    try {
      // Limpiar key específica de categoría
      const categoryKey = `${QUIZ_STORAGE_KEY}_${currentCategory}`;
      localStorage.removeItem(categoryKey);
      
      // También limpiar keys compartidas para compatibilidad
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
    } catch (error) {
      console.error('Error limpiando estado del quiz:', error);
    }
  };

  // Reiniciar progreso del quiz cuando el usuario se desloguea - DEBE ejecutarse ANTES del useEffect de restauración
  useEffect(() => {
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a sessionStorage/localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return;
    }
    
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

  /**
   * RESTAURACIÓN DE PROGRESO DEL QUIZ (Versión en Español)
   * 
   * IMPORTANTE: Ver comentarios detallados en Quiz.js (versión en inglés) para entender
   * la lógica completa de restauración de progreso.
   * 
   * DEEP LINKING: Cuando viene de deep linking (questionLimit !== null), esperamos a que
   * las preguntas se carguen antes de restaurar el progreso. NO saltamos la restauración
   * completamente, solo esperamos a que las preguntas estén disponibles.
   * 
   * ⚠️ Si modificas esta lógica, asegúrate de mantener la misma funcionalidad que Quiz.js
   */
  useEffect(() => {
    if (!isLoaded) return;

    // Si viene de deep linking con questionLimit, esperar a que las preguntas se carguen antes de restaurar
    // Esto evita intentar restaurar cuando no hay preguntas disponibles, pero NO salta la restauración
    if (questionLimit !== null && (isLoadingQuestions || availableQuestions.length === 0)) {
      return;
    }

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
            // No hay progreso en DB, intentar localStorage
            restoreQuizState();
          }
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          setIsRestoring(false);
          hasRestoredRef.current = true;
        }).catch(() => {
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          // En caso de error, usar localStorage como respaldo
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
  }, [isLoaded, isSignedIn, isLoadingQuestions, availableQuestions.length, isLoadingFromDatabase, questionLimit]);

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
    // CRÍTICO: Verificar que estamos en el cliente antes de acceder a localStorage
    // Durante el prerendering en Vercel, estas APIs no están disponibles
    if (typeof window === 'undefined') {
      return;
    }
    
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

  // Effect to show modal when directly accessing premium question
  useEffect(() => {
    // No mostrar modal mientras se están cargando las preguntas
    if (isLoadingQuestions || availableQuestions.length === 0) {
      return;
    }
    
    // CRITICAL FIX: Don't show modal if we're still restoring state
    // This prevents showing the modal incorrectly when user returns to quiz
    if (isRestoring || isLoadingFromDatabase) {
      return;
    }
    
    /**
     * CRITICAL FIX: Show premium modal when user completes exactly 20 questions
     * 
     * This useEffect serves as a backup check in case the modal wasn't triggered
     * in handleNext (e.g., if user navigates directly or state changes occur).
     * 
     * IMPORTANT: We check `answeredQuestions === 20` (not `>= 20`)
     * 
     * Why this matters:
     * - Must match the condition in handleNext to ensure consistency
     * - Using `>= 20` can cause the modal to appear incorrectly if answeredQuestions
     *   gets out of sync with the actual question index
     * 
     * DO NOT CHANGE: This condition must remain `answeredQuestions === 20` to prevent regression.
     */
    if (availableQuestions.length > 0 && answeredQuestions === 20 && !isPremium && !isRestoring && !isLoadingFromDatabase) {
      setShowPremiumModal(true);
    }
  }, [currentQuestionIndex, isPremium, isSignedIn, isLoadingQuestions, availableQuestions.length, answeredQuestions, isRestoring, isLoadingFromDatabase]);

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

    // IMPORTANTE (bug corregido: modal de autenticación faltante en ES):
    // - En un bug previo, la versión en español permitía avanzar a la pregunta 4 (índice 3) sin autenticación.
    // - La versión en inglés (Quiz.js) SÍ verifica `nextIndex === 3 && !isSignedIn && isLoaded` antes de avanzar.
    // - Esta verificación debe estar presente en AMBAS versiones para mantener consistencia.
    // - Si modificas esta lógica en el futuro, asegúrate de aplicar el cambio en AMBOS archivos (Quiz.js y Quiz-es.js).
    //
    // Verificar si la siguiente pregunta es #4 (índice 3) y el usuario no está autenticado.
    //
    // IMPORTANTE (regresión evitada: login con email en ES mostraba progreso incorrecto):
    // - En este branch NO debemos depender del state actual para persistir, porque el login puede recargar la página.
    // - Por eso persistimos con valores post-respuesta (nextAnswered/nextCorrect/nextIndex) y avanzamos el índice
    //   internamente antes de mostrar el modal.
    if (nextIndex === 3 && !isSignedIn && isLoaded) {
      // Aplicar progreso "post-respuesta" ANTES de persistir y mostrar el modal.
      // Esto hace el flujo robusto incluso si el login (email) recarga la página.
      setAnsweredQuestions((prev) => prev + 1);
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }

      // Avanzar internamente al siguiente índice para que, tras autenticarse,
      // el usuario continúe en la pregunta 4 sin requerir re-responder la 3ra.
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);

      setShowAuthModal(true);

      // Persistir con valores calculados (post-respuesta) para evitar restauración con 2/3 inconsistente.
      // OJO: usar `saveQuizState()` sin override aquí puede reintroducir el bug (state stale).
      saveQuizState({
        currentQuestionIndex: nextIndex,
        correctAnswers: nextCorrect,
        answeredQuestions: nextAnswered,
      });
      persistProgress(); // no-op si no está logueado
      return;
    }

    /**
     * ⚠️ BUG FIX (Bug #3 - Spanish): Modal premium no aparecía después de 20 preguntas
     * 
     * PROBLEMA ORIGINAL:
     * - Usuario completaba 20 preguntas en español
     * - El modal premium NO aparecía automáticamente
     * - El botón "Finalizar" se deshabilitaba, pero el usuario no veía el popup de "Get Instant Access"
     * 
     * CAUSA RAÍZ:
     * - El componente español usaba `nextIndex >= availableQuestions.length` en lugar de
     *   `nextAnswered === 20` como el componente inglés
     * - Esta verificación se ejecutaba DESPUÉS de incrementar contadores y solo cuando
     *   el usuario intentaba ir a la pregunta 21 (índice 20)
     * - Si el usuario estaba en la pregunta 20 (índice 19), `nextIndex` sería 20, pero
     *   `availableQuestions.length` también era 20, por lo que la condición no se cumplía
     * 
     * SOLUCIÓN:
     * - Cambiar a `nextAnswered === 20` igual que el componente inglés
     * - Verificar ANTES de incrementar contadores para mostrar el modal en el momento correcto
     * - Esto asegura que el modal aparezca exactamente cuando el usuario completa la pregunta 20
     * 
     * ⚠️ CRITICAL: Esta condición debe ser `nextAnswered === 20` (no `>= 20` y no basada en índice).
     * Usar `>= 20` puede causar que el modal aparezca demasiado temprano si hay desincronización.
     * Usar `nextIndex >= availableQuestions.length` causa que el modal aparezca demasiado tarde.
     * 
     * ⚠️ NO CAMBIAR: Esta condición debe permanecer `nextAnswered === 20` para prevenir regresión.
     */
    if (nextAnswered === 20 && !isPremium && !isRestoring && !isLoadingFromDatabase && availableQuestions.length > 0) {
      // Increment counters before showing modal (so answeredQuestions becomes 20)
      setAnsweredQuestions((prev) => prev + 1);
      if (isCorrect) {
        setCorrectAnswers((prev) => prev + 1);
      }
      setShowPremiumModal(true);
      // Save progress before showing modal
      saveQuizState();
      persistProgress();
      return;
    }

    /**
     * ⚠️ BUG FIX (Bug #2 - Spanish): Block further progress AFTER user closes premium modal
     * 
     * PROBLEMA ORIGINAL:
     * - Usuario completaba 20 preguntas y aparecía el modal premium
     * - Usuario cerraba el modal
     * - Botón "Finalizar" estaba deshabilitado (correcto)
     * - PERO: Si el usuario hacía clic múltiples veces en "Finalizar", el score seguía
     *   incrementando (21, 22, 23...) aunque las preguntas no avanzaban
     * 
     * CAUSA RAÍZ:
     * - La verificación de bloqueo estaba DESPUÉS de incrementar contadores
     * - Cuando el usuario hacía clic en "Finalizar", los contadores se incrementaban primero
     * - Luego se verificaba si debía bloquear, pero el daño ya estaba hecho (score aumentado)
     * - El botón estaba deshabilitado visualmente, pero `handleNext` seguía ejecutándose
     * 
     * SOLUCIÓN:
     * - Verificar `answeredQuestions >= 20` ANTES de incrementar contadores
     * - Si el usuario tiene 20+ preguntas y no es premium, bloquear el progreso inmediatamente
     * - Re-mostrar el modal si fue cerrado
     * - NO incrementar contadores para prevenir que el score aumente
     * 
     * ⚠️ CRITICAL: Esta verificación debe estar ANTES de incrementar contadores.
     * Si se mueve después, el score seguirá incrementando cuando el usuario hace clic
     * múltiples veces en "Finalizar" después de completar 20 preguntas.
     * 
     * ⚠️ NO REMOVER: Esta verificación es esencial para prevenir que usuarios no premium
     * continúen después de las 20 preguntas gratuitas y que el score aumente incorrectamente.
     */
    if (answeredQuestions >= 20 && !isPremium && !isRestoring && !isLoadingFromDatabase) {
      // Re-show modal if it was closed
      if (!showPremiumModal) {
        setShowPremiumModal(true);
      }
      // DO NOT increment counters - this prevents score from increasing
      return;
    }

    // AHÍ incrementar contadores
    setAnsweredQuestions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Avanzar a la siguiente pregunta solo si el usuario está autenticado (para pregunta 4+) o si es antes de la pregunta 4
    // También verificar si la siguiente pregunta está dentro de las preguntas disponibles
    if (nextIndex < availableQuestions.length) {
      // Si intenta ir a pregunta 4+ y no está autenticado, no avanzar
      if (nextIndex >= 3 && !isSignedIn) {
        setShowAuthModal(true);
        // Guardar progreso antes de mostrar modal
        saveQuizState();
        persistProgress();
        return;
      }
      // Avanzar índice
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);

      // AHÍ guardar en DB una sola vez (con guard para evitar doble envío)
      saveQuizState();
      persistProgress();
    } else {
      // End of current category
      // Si estamos en modo universal, avanzar a la siguiente categoría
      if (isUniversalMode && universalCategoryIndex < UNIVERSAL_CATEGORIES.length - 1) {
        const nextCategoryIndex = universalCategoryIndex + 1;
        const nextCategory = UNIVERSAL_CATEGORIES[nextCategoryIndex];
        
        // Resetear estado para la nueva categoría
        setCurrentCategory(nextCategory);
        setUniversalCategoryIndex(nextCategoryIndex);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setAnswers([]);
        setCorrectAnswers(0);
        setAnsweredQuestions(0);
        
        // Forzar recarga de preguntas para la nueva categoría
        hasLoadedQuestionsRef.current = false;
        
        // Guardar progreso de la categoría anterior
        saveQuizState();
        persistProgress();
      } else {
        // End of quiz (o end of universal mode) - save progress
        saveQuizState();
        persistProgress();
      }
    }
  };

  /**
   * ⚠️ CRITICAL: Lemon Squeezy Overlay Initialization
   * 
   * PROBLEMA RESUELTO: Sin esta inicialización, el checkout redirige a una página externa
   * en lugar de mostrar un modal overlay en nuestra web.
   * 
   * CAUSA RAÍZ: El script de Lemon Squeezy (`lemon.js`) se carga pero NO inicializa
   * automáticamente `window.LemonSqueezy.Url.Open()`. Esta función solo está disponible
   * después de llamar a `window.createLemonSqueezy()`.
   * 
   * SIN `createLemonSqueezy()`:
   * - `window.LemonSqueezy` puede existir pero `window.LemonSqueezy.Url.Open` es undefined
   * - El código cae en el fallback de `window.location.href = data.checkoutUrl`
   * - El usuario es redirigido a la página externa de Lemon Squeezy
   * 
   * CON `createLemonSqueezy()`:
   * - `window.LemonSqueezy.Url.Open()` está disponible
   * - El checkout se abre como overlay modal dentro de nuestra web
   * - Mejor experiencia de usuario (no sale de la página)
   * 
   * ⚠️ NO REMOVER: Esta inicialización es esencial para que el overlay funcione.
   * Si se remueve, el checkout volverá a redirigir en lugar de mostrar el modal.
   */
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.LemonSqueezy) {
      const script = document.createElement('script');
      script.src = 'https://app.lemonsqueezy.com/js/lemon.js';
      script.async = true;
      script.onload = () => {
        // CRITICAL: Inicializar Lemon Squeezy para habilitar el overlay
        // Sin esto, window.LemonSqueezy.Url.Open() no estará disponible
        if (typeof window.createLemonSqueezy === 'function') {
          try {
            window.createLemonSqueezy();
          } catch (err) {
            console.error('Error initializing Lemon Squeezy:', err);
          }
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleCloseModal = () => {
    setShowPremiumModal(false);
    setCheckoutError(null);
    // El usuario se queda en la pregunta actual (no avanzamos si no es premium)
    // NOTE: If user has 20+ questions and is not premium, handleNext will block further progress
  };

  /**
   * ⚠️ BUG FIX (Bug #4 - Spanish): Botón "Obtener Acceso" solo cerraba el modal
   * 
   * PROBLEMA ORIGINAL:
   * - Usuario completaba 20 preguntas y aparecía el modal premium
   * - Usuario hacía clic en "Obtener Acceso Inmediato"
   * - El modal simplemente se cerraba en lugar de abrir el checkout de Lemon Squeezy
   * - No se mostraba ningún overlay de pago
   * 
   * CAUSA RAÍZ:
   * - El componente español tenía un `handleUpgrade` simplificado que solo hacía:
   *   `setIsPremium(true); setShowPremiumModal(false);`
   * - No llamaba a la API `/api/checkout`
   * - No inicializaba el script de Lemon Squeezy
   * - No abría el overlay de checkout
   * 
   * SOLUCIÓN:
   * - Reemplazar `handleUpgrade` simplificado con la versión completa del componente inglés
   * - Agregar estados `isLoadingCheckout` y `checkoutError` para manejar el estado del checkout
   * - Agregar `useEffect` para cargar e inicializar el script de Lemon Squeezy
   * - Llamar a `/api/checkout` para obtener la URL de checkout
   * - Abrir el overlay de Lemon Squeezy usando `window.LemonSqueezy.Url.Open()`
   * - Mantener el modal premium abierto mientras se muestra el checkout overlay
   * 
   * ⚠️ CRITICAL: Esta función NO debe cerrar el modal inmediatamente.
   * El modal debe permanecer abierto para que el usuario vea el checkout overlay de Lemon Squeezy.
   * Solo cerrar el modal si hay un error o si el usuario lo cierra manualmente.
   * 
   * ⚠️ NO SIMPLIFICAR: Esta función debe mantener toda la lógica de checkout.
   * Si se simplifica, el checkout volverá a fallar.
   * 
   * Flow:
   * 1. Verify user is authenticated
   * 2. Call /api/checkout to get checkout URL
   * 3. Open Lemon Squeezy overlay using window.LemonSqueezy.Url.Open()
   * 4. Keep modal open so user can complete checkout
   */
  const handleUpgrade = async () => {
    // Verificar autenticación
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      // Redirigir a login si no está autenticado
      router.push('/sign-in?redirect_url=' + encodeURIComponent(window.location.href));
      return;
    }

    setIsLoadingCheckout(true);
    setCheckoutError(null);

    try {
      // Llamar a la API de checkout
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout');
      }

      /**
       * ⚠️ CRITICAL: Lemon Squeezy Overlay vs Redirect
       * 
       * PREFERENCIA: Siempre intentar abrir el overlay primero (mejor UX).
       * Solo redirigir si el overlay no está disponible.
       * 
       * FLUJO:
       * 1. Si `window.LemonSqueezy.Url.Open` existe → Abrir overlay (modal en nuestra web)
       * 2. Si no existe pero hay checkoutUrl → Redirigir (fallback)
       * 
       * ⚠️ NO CAMBIAR: El orden es importante. Verificar `Url.Open` antes de redirigir
       * asegura que usamos el overlay cuando está disponible.
       * 
       * NOTA: NO cerrar el modal premium aquí - dejarlo abierto para que el usuario
       * vea el checkout overlay encima del modal.
       */
      if (data.checkoutUrl && window.LemonSqueezy) {
        try {
          // Intentar abrir overlay (preferido - modal en nuestra web)
          if (window.LemonSqueezy.Url && window.LemonSqueezy.Url.Open) {
            // NO cerrar el modal aquí - dejarlo abierto para que el usuario vea el checkout
            window.LemonSqueezy.Url.Open(data.checkoutUrl);
          } else {
            // Fallback: overlay no disponible, redirigir
            window.location.href = data.checkoutUrl;
          }
        } catch (err) {
          // Si hay error al abrir overlay, redirigir como fallback
          console.error('Error opening Lemon Squeezy overlay:', err);
          window.location.href = data.checkoutUrl;
        }
      } else if (data.checkoutUrl) {
        // Script no cargado, redirigir directamente
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error('Error creating checkout:', err);
      setCheckoutError(err.message || 'Failed to start checkout. Please try again.');
    } finally {
      setIsLoadingCheckout(false);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-end gap-4">
            {/* Logo */}
            <a 
              href="/es"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/es";
              }}
              className="cursor-pointer inline-block flex-shrink-0"
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
            
            {/* Progress bar - between logo and buttons */}
            {currentQuestion && (
              <div className="flex flex-col gap-1 w-[900px] mx-auto">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium truncate">
                    Pregunta {answeredQuestions + 1} de {displayQuestionCount}
                  </span>
                  {!isPremium && (
                    <span className="text-blue-600 text-xs sm:text-sm font-semibold flex-shrink-0 ml-2">
                      Modo Gratuito
                    </span>
                  )}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((answeredQuestions + 1) / displayQuestionCount) * 100}%` }}
                  />
                </div>
              </div>
            )}
            
            {/* Right side buttons */}
            <div className="flex items-end gap-3 sm:gap-4 md:gap-6 flex-wrap flex-shrink-0 ml-auto">
              {!(isSignedIn && isPremium) && (
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
          {/* Category Title */}
          {currentCategory !== 'ALL' && (
            <div className="mb-4 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
                {CATEGORY_TITLES[currentCategory] || currentCategory}
              </h1>
            </div>
          )}
          

        {/* Pregunta con marcador a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Sección de Pregunta - Ocupa 2 columnas en desktop */}
          <div className="lg:col-span-2 order-1 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
          {/* Category badge for current question */}
          {currentQuestion?.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                {CATEGORY_TITLES[currentQuestion.category] || currentQuestion.category}
              </span>
            </div>
          )}
          
          {/* 
            ⚠️ BUG FIX: Corrección de rutas de imágenes
            
            PROBLEMA: Algunas rutas en la base de datos tienen "/public/" (incorrecto)
            En Next.js, las imágenes en public/ se acceden sin el prefijo "/public"
            
            SOLUCIÓN: 
            1. Script SQL (scripts/fix-image-paths.sql) corrige todas las rutas en la BD
            2. Script de seeding (seed-questions.mjs) corrige rutas al importar
            3. Esta corrección en el código es un fallback por si quedan rutas incorrectas
            
            NOTA: La corrección en el código es temporal. Lo ideal es corregir la BD.
          */}
          {/* Image reference (if available) */}
          {currentQuestion.image && (
            <div className="mb-4 sm:mb-6 w-full">
              <div className="relative w-full h-auto rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                <Image
                  src={currentQuestion.image.startsWith('/public/') ? currentQuestion.image.replace('/public', '') : currentQuestion.image}
                  alt="Imagen de referencia de la pregunta"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority={currentQuestionIndex < 3}
                  unoptimized={currentQuestion.image.startsWith('http')}
                />
              </div>
            </div>
          )}
          
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
                } else if (index === currentQuestion.correct_answer) {
                  // Marcar la respuesta correcta en verde cuando se selecciona una incorrecta
                  buttonClass += "bg-green-500 border-green-600 text-white";
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

          {/* Explicación - Solo móvil (dentro de la columna de pregunta) */}
          {showExplanation && (
            <div className={`mt-6 lg:hidden p-4 rounded-lg border-2 ${
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

          {/* Marcador de puntuación - 1 columna en desktop */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">
                  {CATEGORY_TITLES[currentCategory] ? `${CATEGORY_TITLES[currentCategory]} Progreso` : 'Tu Progreso'}
                </h3>
                <div className="space-y-2 sm:space-y-3 mb-4">
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
                
                {/* Botón Siguiente - Debajo del score en desktop, separado en móvil */}
                {isAnswered && (
                  <div className="lg:block hidden">
                    {/* 
                      ⚠️ BUG FIX (Bug #2): Deshabilitar botón después de 20 preguntas
                      
                      PARTE DE LA SOLUCIÓN: Además de bloquear el progreso en handleNext,
                      también deshabilitamos visualmente el botón para mejor UX.
                      
                      Esto previene que el usuario intente hacer clic múltiples veces en "Finalizar"
                      y proporciona feedback visual claro de que no puede continuar sin premium.
                      
                      IMPORTANTE: Aunque el botón esté deshabilitado, handleNext también debe
                      verificar y bloquear el progreso para prevenir que el score aumente si
                      el usuario encuentra alguna forma de ejecutar handleNext.
                    */}
                    <button
                      onClick={handleNext}
                      disabled={answeredQuestions >= 20 && !isPremium}
                      className={`w-full px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg ${
                        answeredQuestions >= 20 && !isPremium
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
                      }`}
                    >
                      {currentQuestionIndex + 1 < displayQuestionCount ? 'Siguiente' : 'Finalizar'}
                    </button>
                  </div>
                )}
              </div>

              {/* Explicación - Solo desktop (debajo del score) */}
              {showExplanation && (
                <div className="hidden lg:block">
                  <div className={`p-4 rounded-lg border-2 ${
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
                </div>
              )}
            </div>
          </div>
          
          {/* Botón Siguiente - Solo móvil */}
          {isAnswered && (
            <div className="order-3 lg:hidden flex justify-end mt-4 sm:mt-6">
              <button
                onClick={handleNext}
                disabled={answeredQuestions >= 20 && !isPremium}
                className={`px-6 sm:px-8 py-3 sm:py-4 text-white font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg touch-manipulation min-w-[120px] ${
                  answeredQuestions >= 20 && !isPremium
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl active:scale-95"
                }`}
              >
                {currentQuestionIndex + 1 < displayQuestionCount ? 'Siguiente' : 'Finalizar'}
              </button>
            </div>
          )}
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
                      $9.99
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

                {/* Error Message */}
                {checkoutError && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-600">{checkoutError}</p>
                  </div>
                )}

                {/* Botón CTA */}
                <button
                  onClick={handleUpgrade}
                  disabled={isLoadingCheckout || !isLoaded}
                  className={`w-full text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg mb-3 touch-manipulation min-h-[48px] ${
                    isLoadingCheckout || !isLoaded
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl active:scale-95 sm:hover:scale-[1.02]'
                  }`}
                >
                  {isLoadingCheckout ? 'Cargando...' : 'Obtener Acceso Inmediato'}
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

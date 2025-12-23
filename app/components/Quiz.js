"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle2, Trophy, Shield, Lock, Zap } from "lucide-react";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthModal from "./AuthModal";
import LanguageSelector from "./LanguageSelector";

const QUIZ_STORAGE_KEY = "epa608_quiz_progress";
const QUIZ_STORAGE_KEY_ES = "epa608_quiz_progress_es";

export default function Quiz() {
  const { isSignedIn, isLoaded } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const isSpanish = pathname?.startsWith("/es") || false;
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
  const isLoadingFromDatabaseRef = useRef(false); // Prevenir loop infinito
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
    const loadKey = `${isSignedIn ? 'auth' : 'anon'}-${isSpanish ? 'es' : 'en'}`;
    
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
        const lang = isSpanish ? 'es' : 'en';
        const response = await fetch(`/api/questions?lang=${lang}&category=ALL`, { 
          cache: 'no-store' 
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to load questions: ${response.status} ${response.statusText}`);
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
  }, [isLoaded, isSignedIn, isSpanish]);

  const availableQuestions = questions;
  // Para el UI: usuarios anónimos ven 20 preguntas, aunque solo tengan acceso a 3
  // Para usuarios logueados no premium: 20, para premium: todas
  const displayQuestionCount = isPremium 
    ? (limitApplied === Infinity ? questions.length : limitApplied)
    : (!isSignedIn ? 20 : (limitApplied === Infinity ? questions.length : limitApplied));
  const currentQuestion = availableQuestions[currentQuestionIndex];
  const isAnswered = selectedAnswer !== null;

  // Calculate free questions answered (first 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);

  // For premium users, show total progress; for non-premium, only first 3
  const totalQuestionsAnswered = isPremium
    ? answeredQuestions
    : freeQuestionsAnswered;


  // Save quiz state to localStorage (save to shared key so progress persists across languages)
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
      // Save to shared key so progress persists across languages
      localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(quizState));
      // Also save to ES key for backward compatibility
      localStorage.setItem(QUIZ_STORAGE_KEY_ES, JSON.stringify(quizState));
    } catch (error) {
      console.error("Error saving quiz state:", error);
    }
  };

  // Save quiz progress to Supabase
  //
  // IMPORTANTE (regresión evitada: "10 vs 11" entre computadoras):
  // - En un bug previo, el progreso guardado quedaba "1 por detrás" en otra computadora.
  // - Causa: en React, `setAnsweredQuestions(prev => prev + 1)` y `setCorrectAnswers(...)` son async.
  //   Si hacemos el POST usando `answeredQuestions` / `correctAnswers` del state actual, el backend recibe
  //   el valor anterior (ej: envía 10 cuando el usuario ya respondió 11).
  // - Solución: `saveProgressToDatabase(override)` permite enviar un payload explícito con los valores
  //   "post-respuesta" calculados en `handleNext` (answered+1, correct+1 si aplica, nextIndex).
  //
  // Si en el futuro cambias `handleNext`, asegúrate de no volver a enviar al backend valores "stale".
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
      console.error('Error saving progress to database:', error);
    }
  };

  // Load quiz progress from Supabase database
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
          answers: [], // We don't store individual answers in DB, only progress
        };
      }

      return null;
    } catch (error) {
      console.error('Error loading progress from database:', error);
      return null;
    }
  };

  // Restore quiz state from localStorage (check shared key first, then language-specific key)
  const restoreQuizState = () => {
    // Check if we just logged out - if so, don't restore anything
    const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out') || justLoggedOutRef.current;
    if (justLoggedOut && !isSignedIn) {
      // Don't clear the flag here - let the useEffect handle it
      return false;
    }
    
    // If user is not signed in, don't restore from localStorage
    // This prevents restoring old progress after logout
    if (!isSignedIn) {
      return false;
    }

    try {
      // Try shared key first (works across languages)
      let savedState = localStorage.getItem(QUIZ_STORAGE_KEY);
      // If not found, try language-specific key as fallback
      if (!savedState) {
        savedState = localStorage.getItem(QUIZ_STORAGE_KEY_ES);
      }

      if (savedState) {
        const quizState = JSON.parse(savedState);
        // Only restore if state is recent (within last hour)
        const oneHour = 60 * 60 * 1000;
        if (Date.now() - quizState.timestamp < oneHour) {
          // CRITICAL FIX: Don't restore if questions haven't loaded yet
          // This prevents restoring with availableQuestions.length === 0, which causes index -1
          if (availableQuestions.length === 0 || isLoadingQuestions) {
            return false; // Return false to indicate we need to wait
          }
          
          const rawRestoredAnswers = quizState.answers || [];
          // Filter out nulls and invalid entries to ensure safe access
          const restoredAnswers = Array.isArray(rawRestoredAnswers) 
            ? rawRestoredAnswers.filter(a => a != null && a.questionId != null)
            : [];
          
          // Find the correct index based on source_id of the last answered question
          // This fixes Bug 1: when questions change after login, we need to find the right question
          let restoredIndex = 0;
          if (restoredAnswers.length > 0 && availableQuestions.length > 0) {
            // Find the last answered question's source_id
            const lastAnsweredIndex = restoredAnswers.length - 1;
            const lastAnsweredQuestionId = restoredAnswers[lastAnsweredIndex]?.questionId;
            
            if (lastAnsweredQuestionId !== undefined) {
              // Find the index of this question in the new questions array
              const foundIndex = availableQuestions.findIndex(q => q.source_id === lastAnsweredQuestionId);
              if (foundIndex !== -1) {
                // If we found the question, go to the next one (since they already answered it)
                restoredIndex = Math.min(foundIndex + 1, availableQuestions.length - 1);
              } else {
                // If question not found, find the first unanswered question
                const answeredQuestionIds = new Set(restoredAnswers.map(a => a?.questionId).filter(Boolean));
                const firstUnansweredIndex = availableQuestions.findIndex(q => !answeredQuestionIds.has(q.source_id));
                restoredIndex = firstUnansweredIndex !== -1 ? firstUnansweredIndex : 0;
              }
            } else {
              // Fallback: use the saved index, but clamp it to valid range
              restoredIndex = Math.min(quizState.currentQuestionIndex || 0, availableQuestions.length - 1);
            }
          } else {
            restoredIndex = Math.min(quizState.currentQuestionIndex || 0, availableQuestions.length - 1);
          }
          
          // Ensure restoredIndex is valid (>= 0)
          if (restoredIndex < 0) {
            restoredIndex = 0;
          }
          
          setCurrentQuestionIndex(restoredIndex);
          setCorrectAnswers(quizState.correctAnswers || 0);
          // CRITICAL FIX: Calculate answeredQuestions from restoredAnswers if localStorage value is 0 or missing
          // This ensures the counter is correct even if the localStorage value is stale
          let calculatedAnsweredQuestions = 0;
          if (restoredAnswers.length > 0) {
            const safeAnswers = Array.isArray(restoredAnswers) ? restoredAnswers : [];
            calculatedAnsweredQuestions = safeAnswers.filter(a => a?.selectedOption !== null && a?.selectedOption !== undefined).length;
          } else {
            calculatedAnsweredQuestions = quizState.answeredQuestions || 0;
          }
          setAnsweredQuestions(calculatedAnsweredQuestions);
          setAnswers(restoredAnswers);
          
          // Restore selectedAnswer and showExplanation if there's an answer for current question
          const currentQuestion = availableQuestions[restoredIndex];
          const currentAnswer = currentQuestion ? restoredAnswers.find(a => a?.questionId === currentQuestion.source_id) : null;
          if (currentAnswer && currentAnswer?.selectedOption !== undefined) {
            setSelectedAnswer(currentAnswer.selectedOption);
            setShowExplanation(true);
          } else {
            setSelectedAnswer(null);
            setShowExplanation(false);
          }
          
          return true;
        } else {
          // Clear old state from both keys
          localStorage.removeItem(QUIZ_STORAGE_KEY);
          localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
        }
      }
    } catch (error) {
      console.error("Error restoring quiz state:", error);
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
    }
    return false;
  };

  // Clear quiz state from localStorage (clear both keys)
  const clearQuizState = () => {
    try {
      localStorage.removeItem(QUIZ_STORAGE_KEY);
      localStorage.removeItem(QUIZ_STORAGE_KEY_ES);
    } catch (error) {
      console.error("Error clearing quiz state:", error);
    }
  };

  // Reset quiz progress when user logs out - MUST run BEFORE restore useEffect
  useEffect(() => {
    if (!isLoaded) return;

    // Only reset if user was previously signed in and now is not (actual logout)
    if (prevIsSignedInRef.current === true && !isSignedIn) {
      // Set flag FIRST to prevent restoreQuizState from reading old data
      sessionStorage.setItem('epa608_just_logged_out', 'true');
      justLoggedOutRef.current = true;
      // Clear localStorage to prevent restoreQuizState from reading old data
      clearQuizState();
      // Clear redirect flag to prevent auto-redirect to quiz
      localStorage.removeItem('epa608_redirect_after_auth');
      // Reset state
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setAnsweredQuestions(0);
      setAnswers([]);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setHasLoadedFromDatabase(false);
      setIsRestoring(false);
      hasRestoredRef.current = false;
      
      // Clear the flag after a delay to allow restoreQuizState to check it
      // Use setTimeout to ensure all pending restoreQuizState calls have a chance to check the flag
      setTimeout(() => {
        sessionStorage.removeItem('epa608_just_logged_out');
        justLoggedOutRef.current = false;
      }, 1000);
    }

    // Update ref to track current state for next render
    prevIsSignedInRef.current = isSignedIn;
  }, [isLoaded, isSignedIn]);

  // Restore state on mount and when user signs in
  useEffect(() => {
    if (!isLoaded) return;
    // IMPORTANTE (regresión evitada):
    // - Cuando el usuario pasa de ANÓNIMO -> LOGUEADO, queremos "migrar" el progreso (las 3 anónimas)
    //   a la sesión autenticada y continuar en la pregunta 4.
    // - En un bug previo, `hasRestoredRef` se marcaba/consultaba demasiado pronto (cuando aún no habían
    //   preguntas cargadas), y el effect se salteaba la restauración post-login, reiniciando en la pregunta 1.
    // Por eso:
    // - Reseteamos el guard cuando cambia `isSignedIn`
    // - Y NO bloqueamos este effect mientras `availableQuestions` está vacío o `isLoadingQuestions=true`.
    //
    // Si tocas esta lógica en el futuro, asegúrate de no "quemar" la restauración antes de que existan preguntas.
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

    // Check if we just logged out - if so, don't restore anything
    const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out') || justLoggedOutRef.current;
    if (justLoggedOut && !isSignedIn) {
      // Don't clear the flag yet - keep it for restoreQuizState to check
      // The flag will be cleared after restoreQuizState has a chance to check it
      setIsRestoring(false);
      return;
    }

    // Check if we have a redirect flag from authentication
    const redirectFlag = localStorage.getItem("epa608_redirect_after_auth");

    // Sync user to database when they sign in (fallback if webhook is not configured)
    if (isSignedIn) {
      const syncKey = "epa608_user_synced";
      const hasSynced = sessionStorage.getItem(syncKey);
      const syncInProgressKey = "epa608_user_sync_in_progress";
      const syncInProgress = sessionStorage.getItem(syncInProgressKey);

      if (!hasSynced && !syncInProgress) {
        // Marcar que la sincronización está en progreso para evitar llamadas duplicadas
        sessionStorage.setItem(syncInProgressKey, "true");

        fetch("/api/users/sync", { method: "POST" })
          .then(async (res) => {
            const text = await res.text();
            if (!res.ok) throw new Error(text);
            return JSON.parse(text);
          })
          .then(async (data) => {
            if (data.success) sessionStorage.setItem(syncKey, "true");
            sessionStorage.removeItem(syncInProgressKey);
            
            // After syncing, load progress from database (prioritize DB over localStorage)
            isLoadingFromDatabaseRef.current = true; // Set ref FIRST
            setIsLoadingFromDatabase(true);
            const dbProgress = await loadProgressFromDatabase();
            if (dbProgress) {
              // CRITICAL FIX: Wait for questions to load before restoring
              if (availableQuestions.length === 0 || isLoadingQuestions) {
                setIsLoadingFromDatabase(false);
                setHasLoadedFromDatabase(true);
                setIsRestoring(false);
                isLoadingFromDatabaseRef.current = false; // Clear ref
                return; // Wait for questions to load, then restore will happen in next useEffect cycle
              }
              
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
                
                // CRITICAL FIX: Si el índice del servidor es inconsistente con las respuestas
                // (serverIndex > serverAnswered + margen de error), entonces el índice del DB
                // probablemente está incorrecto (de una sesión anónima anterior). 
                // Usar serverAnswered para calcular el índice correcto.
                // Margen de 1: permite que serverIndex sea serverAnswered o serverAnswered + 1 (siguiente pregunta)
                if (serverIndex > serverAnswered + 1) {
                  // El índice del DB parece incorrecto (probablemente de sesión anónima anterior)
                  // Calcular el índice basado en las preguntas respondidas (la siguiente pregunta sin responder)
                  restoredIndex = Math.min(serverAnswered, availableQuestions.length - 1);
                  
                } else {
                  // Usar el índice del servidor directamente (sesión autenticada previa)
                  restoredIndex = Math.min(Math.max(serverIndex, 0), availableQuestions.length - 1);
                }
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
                
                // Find the correct index based on source_id
                restoredIndex = dbProgress.currentQuestionIndex || 0;
                if (restoredAnswers.length > 0 && availableQuestions.length > 0) {
                  const lastAnsweredIndex = restoredAnswers.length - 1;
                  const lastAnsweredQuestionId = restoredAnswers[lastAnsweredIndex]?.questionId;
                  
                  if (lastAnsweredQuestionId !== undefined) {
                    const foundIndex = availableQuestions.findIndex(q => q.source_id === lastAnsweredQuestionId);
                    if (foundIndex !== -1) {
                      restoredIndex = Math.min(foundIndex + 1, availableQuestions.length - 1);
                    } else {
                      const answeredQuestionIds = new Set(restoredAnswers.map(a => a?.questionId).filter(Boolean));
                      const firstUnansweredIndex = availableQuestions.findIndex(q => !answeredQuestionIds.has(q.source_id));
                      restoredIndex = firstUnansweredIndex !== -1 ? firstUnansweredIndex : 0;
                    }
                  } else {
                    restoredIndex = Math.min(dbProgress.currentQuestionIndex || 0, availableQuestions.length - 1);
                  }
                } else {
                  restoredIndex = Math.min(dbProgress.currentQuestionIndex || 0, availableQuestions.length - 1);
                }
              }
              
              // Ensure restoredIndex is valid (>= 0)
              if (restoredIndex < 0) {
                restoredIndex = 0;
              }
              
              setCurrentQuestionIndex(restoredIndex);
              setCorrectAnswers(dbProgress.correctAnswers);
              setAnsweredQuestions(dbProgress.answeredQuestions || 0);
              setAnswers(restoredAnswers);
              
              // Restore selectedAnswer and showExplanation if there's an answer for current question
              const currentQuestion = availableQuestions[restoredIndex];
              const currentAnswer = currentQuestion ? restoredAnswers.find(a => a?.questionId === currentQuestion.source_id) : null;
              if (currentAnswer && currentAnswer?.selectedOption !== undefined) {
                setSelectedAnswer(currentAnswer.selectedOption);
                setShowExplanation(true);
              } else {
                setSelectedAnswer(null);
                setShowExplanation(false);
              }
              
              // Update localStorage with DB progress and restored answers
              saveQuizState();
            } else {
              // No progress in DB, try localStorage
              restoreQuizState();
            }
            setIsLoadingFromDatabase(false);
            setHasLoadedFromDatabase(true);
            setIsRestoring(false);
            isLoadingFromDatabaseRef.current = false; // Clear ref
            if (availableQuestions.length > 0 && !isLoadingQuestions) {
              hasRestoredRef.current = true;
            }
          })
          .catch((err) => {
            console.error("Error syncing user:", err);
            sessionStorage.removeItem(syncInProgressKey);
            // On error, fall back to localStorage
            restoreQuizState();
            setIsRestoring(false);
            isLoadingFromDatabaseRef.current = false; // Clear ref on error
            if (availableQuestions.length > 0 && !isLoadingQuestions) {
              hasRestoredRef.current = true;
            }
          });
      } else if (hasSynced) {
        // User already synced, load progress from database
        isLoadingFromDatabaseRef.current = true; // Set ref FIRST
        setIsLoadingFromDatabase(true);
        loadProgressFromDatabase().then((dbProgress) => {
          if (dbProgress) {
            // CRITICAL FIX: Wait for questions to load before restoring
            if (availableQuestions.length === 0 || isLoadingQuestions) {
              setIsLoadingFromDatabase(false);
              setHasLoadedFromDatabase(true);
              setIsRestoring(false);
              isLoadingFromDatabaseRef.current = false; // Clear ref
              return; // Wait for questions to load, then restore will happen in next useEffect cycle
            }
            
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
              
              // CRITICAL FIX: Si el índice del servidor es inconsistente con las respuestas
              // (serverIndex > serverAnswered + margen de error), entonces el índice del DB
              // probablemente está incorrecto (de una sesión anónima anterior). 
              // Usar serverAnswered para calcular el índice correcto.
              // Margen de 1: permite que serverIndex sea serverAnswered o serverAnswered + 1 (siguiente pregunta)
              if (serverIndex > serverAnswered + 1) {
                // El índice del DB parece incorrecto (probablemente de sesión anónima anterior)
                // Calcular el índice basado en las preguntas respondidas (la siguiente pregunta sin responder)
                restoredIndex = Math.min(serverAnswered, availableQuestions.length - 1);
                
              } else {
                // Usar el índice del servidor directamente (sesión autenticada previa)
                restoredIndex = Math.min(Math.max(serverIndex, 0), availableQuestions.length - 1);
              }
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
              
              // Find the correct index based on source_id
              restoredIndex = dbProgress.currentQuestionIndex || 0;
              if (restoredAnswers.length > 0 && availableQuestions.length > 0) {
                const lastAnsweredIndex = restoredAnswers.length - 1;
                const lastAnsweredQuestionId = restoredAnswers[lastAnsweredIndex]?.questionId;
                
                if (lastAnsweredQuestionId !== undefined) {
                  const foundIndex = availableQuestions.findIndex(q => q.source_id === lastAnsweredQuestionId);
                  if (foundIndex !== -1) {
                    restoredIndex = Math.min(foundIndex + 1, availableQuestions.length - 1);
                  } else {
                    const answeredQuestionIds = new Set(restoredAnswers.map(a => a.questionId).filter(Boolean));
                    const firstUnansweredIndex = availableQuestions.findIndex(q => !answeredQuestionIds.has(q.source_id));
                    restoredIndex = firstUnansweredIndex !== -1 ? firstUnansweredIndex : 0;
                  }
                } else {
                  restoredIndex = Math.min(dbProgress.currentQuestionIndex || 0, availableQuestions.length - 1);
                }
              } else {
                restoredIndex = Math.min(dbProgress.currentQuestionIndex || 0, availableQuestions.length - 1);
              }
            }
            
            // Ensure restoredIndex is valid (>= 0)
            if (restoredIndex < 0) {
              restoredIndex = 0;
            }
            
            
            setCurrentQuestionIndex(restoredIndex);
            setCorrectAnswers(dbProgress.correctAnswers);
            setAnsweredQuestions(dbProgress.answeredQuestions || 0);
            setAnswers(restoredAnswers);
            
            // Restore selectedAnswer and showExplanation if there's an answer for current question
            const currentQuestion = availableQuestions[restoredIndex];
            const currentAnswer = currentQuestion ? restoredAnswers.find(a => a?.questionId === currentQuestion.source_id) : null;
            if (currentAnswer && currentAnswer?.selectedOption !== undefined) {
              
              setSelectedAnswer(currentAnswer.selectedOption);
              setShowExplanation(true);
            } else {
              
              setSelectedAnswer(null);
              setShowExplanation(false);
            }
            
            saveQuizState();
          } else {
            restoreQuizState();
          }
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          setIsRestoring(false);
          isLoadingFromDatabaseRef.current = false; // Clear ref
          if (availableQuestions.length > 0 && !isLoadingQuestions) {
            hasRestoredRef.current = true;
          }
        }).catch(() => {
          setIsLoadingFromDatabase(false);
          setHasLoadedFromDatabase(true);
          restoreQuizState();
          setIsRestoring(false);
          isLoadingFromDatabaseRef.current = false; // Clear ref on error
          if (availableQuestions.length > 0 && !isLoadingQuestions) {
            hasRestoredRef.current = true;
          }
        });
      } else {
        // Sync in progress, wait a bit and try localStorage
        restoreQuizState();
        setIsRestoring(false);
        if (availableQuestions.length > 0 && !isLoadingQuestions) {
          hasRestoredRef.current = true;
        }
      }
    } else {
      // Not signed in, check if we just logged out
      const justLoggedOut = sessionStorage.getItem('epa608_just_logged_out');
      
      // If user just logged out, don't restore from localStorage
      if (justLoggedOut) {
        // Clear the flag after using it
        sessionStorage.removeItem('epa608_just_logged_out');
        setIsRestoring(false);
      } else if (redirectFlag) {
        restoreQuizState();
        setIsRestoring(false);
      } else {
        restoreQuizState();
        setIsRestoring(false);
      }
      if (availableQuestions.length > 0 && !isLoadingQuestions) {
        hasRestoredRef.current = true;
      }
    }
  }, [isLoaded, isSignedIn, isLoadingQuestions, availableQuestions.length, isRestoring, isLoadingFromDatabase]);

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


  // Save state to localStorage whenever it changes (but not during restoration)
  // NOTE: Database save is now handled in handleNext to avoid spam
  useEffect(() => {
    if (!isRestoring && isLoaded && currentQuestionIndex > 0) {
      saveQuizState();
      // NO llamar saveProgressToDatabase aquí - se hace desde handleNext
    }
  }, [currentQuestionIndex, correctAnswers, answeredQuestions, answers, isSignedIn, isLoaded]);

  // Effect to adjust currentQuestionIndex when available questions change
  useEffect(() => {
    if (!isLoaded || isLoadingQuestions || isRestoring || isLoadingFromDatabase) return;
    
    const availableCount = availableQuestions.length;
    
    // CRITICAL FIX: If availableCount is 0, don't adjust (questions might be loading or there's an error)
    // Only adjust if we have questions and the index is out of bounds
    if (availableCount > 0 && currentQuestionIndex >= availableCount) {
      // If user just logged in and was on question 3, keep them there
      // Otherwise, set to the last available question
      const newIndex = Math.min(currentQuestionIndex, availableCount - 1);
      setCurrentQuestionIndex(newIndex);
    } else if (availableCount > 0 && currentQuestionIndex < 0) {
      // If index is negative, reset to 0
      setCurrentQuestionIndex(0);
    } else if (availableCount === 0 && currentQuestionIndex > 0 && !isLoadingQuestions) {
      // If questions are empty but we have an index, reset to 0
      // This prevents showing premium modal incorrectly
      // Only do this if questions are not loading
      setCurrentQuestionIndex(0);
    }
  }, [isLoaded, isSignedIn, isPremium, currentQuestionIndex, availableQuestions.length, isLoadingQuestions, isRestoring, isLoadingFromDatabase]);

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
    
    // CRITICAL FIX for Bug 2: Don't show modal if we're still restoring state
    // This prevents showing the modal incorrectly when user returns to quiz
    if (isRestoring || isLoadingFromDatabase) {
      return;
    }
    
    const question = availableQuestions[currentQuestionIndex];
    
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
  }, [currentQuestionIndex, isPremium, isSignedIn, isLoadingQuestions, availableQuestions.length, isRestoring, isLoadingFromDatabase]);

  const handleAnswerClick = (optionIndex) => {
    if (isAnswered) return; // Don't allow changing answer after selecting
    if (!currentQuestion) return; // CRITICAL FIX: Don't process if question is not available

    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    // Save answer to answers array for persistence (but don't increment counters yet)
    const isCorrectAnswer = optionIndex === currentQuestion.correct_answer;
    setAnswers((prev) => {
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

    // Calcular los valores "post-respuesta" para persistir.
    // IMPORTANTE: estos valores se usan para el POST a la DB (cross-device),
    // porque el state de React todavía NO refleja los incrementos en este tick.
    const nextIndex = currentQuestionIndex + 1;
    const nextAnswered = answeredQuestions + 1;
    const nextCorrect = correctAnswers + (isCorrect ? 1 : 0);

    // AHÍ incrementar contadores
    setAnsweredQuestions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

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

    // Check if next question is #4 (index 3) and user is not signed in
    // Pause the quiz and show auth modal
    if (nextIndex === 3 && !isSignedIn && isLoaded) {
      setShowAuthModal(true);
      // Don't advance - pause the quiz
      // But still save progress for current question
      saveQuizState();
      persistProgress();
      return;
    }

    /**
     * CRITICAL FIX: Show premium modal when user completes exactly 20 questions
     * 
     * IMPORTANT: We check `nextAnswered === 20` (not `>= 20` and not based on index)
     * 
     * Why this matters:
     * - The modal must appear EXACTLY when the user completes the 20th question
     * - Using `nextIndex >= availableQuestions.length` causes the modal to appear
     *   too late (when trying to go to question 21, not when completing question 20)
     * - Using `nextAnswered >= 20` can cause the modal to appear too early if
     *   there's any desynchronization between answeredQuestions and currentQuestionIndex
     * 
     * Previous bug: Modal appeared when user tried to go to question 21 (index 20),
     * but user had already completed 20+ questions, making the timing feel wrong.
     * 
     * Solution: Check for exactly 20 completed questions, regardless of index position.
     * This ensures the modal appears immediately after completing question 20.
     * 
     * DO NOT CHANGE: This condition must remain `nextAnswered === 20` to prevent regression.
     */
    if (nextAnswered === 20 && !isPremium && !isRestoring && !isLoadingFromDatabase && availableQuestions.length > 0) {
      setShowPremiumModal(true);
      // Save progress before showing modal
      saveQuizState();
      persistProgress();
      return;
    }

    // Advance to next question only if user is signed in (for question 4+) or if it's before question 4
    // Also check if next question is within available questions
    if (nextIndex < availableQuestions.length) {
      // If trying to go to question 4+ and not signed in, don't advance
      if (nextIndex >= 3 && !isSignedIn) {
        setShowAuthModal(true);
        // Save progress before showing modal
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
      // End of quiz - save progress
      saveQuizState();
      persistProgress();
    }
  };

  // Load Lemon Squeezy script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.LemonSqueezy) {
      const script = document.createElement('script');
      script.src = 'https://app.lemonsqueezy.com/js/lemon.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleCloseModal = () => {
    setShowPremiumModal(false);
    setCheckoutError(null);
    // User stays on current question (we don't advance if not premium)
  };

  const handleUpgrade = async () => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1003',message:'handleUpgrade called',data:{isSignedIn,isLoaded,lemonSqueezyLoaded:typeof window !== 'undefined' && !!window.LemonSqueezy},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // Verificar autenticación
    if (!isLoaded) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1010',message:'handleUpgrade - Clerk not loaded',data:{isLoaded},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      return;
    }

    if (!isSignedIn) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1016',message:'handleUpgrade - user not signed in, redirecting',data:{isSignedIn},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      // Redirigir a login si no está autenticado
      router.push('/sign-in?redirect_url=' + encodeURIComponent(window.location.href));
      return;
    }

    setIsLoadingCheckout(true);
    setCheckoutError(null);

    try {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1026',message:'handleUpgrade - calling /api/checkout',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion
      
      // Llamar a la API de checkout
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1040',message:'handleUpgrade - checkout response received',data:{ok:response.ok,hasCheckoutUrl:!!data.checkoutUrl,hasLemonSqueezy:typeof window !== 'undefined' && !!window.LemonSqueezy,error:data.error},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
      // #endregion

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout');
      }

      if (data.checkoutUrl && window.LemonSqueezy) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1047',message:'handleUpgrade - opening Lemon Squeezy overlay',data:{checkoutUrl:data.checkoutUrl},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        // Abrir checkout overlay de Lemon Squeezy
        // NO cerrar el modal aquí - dejarlo abierto para que el usuario vea el checkout
        window.LemonSqueezy.Url.Open(data.checkoutUrl);
      } else if (data.checkoutUrl) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1052',message:'handleUpgrade - redirecting to checkout (script not loaded)',data:{checkoutUrl:data.checkoutUrl},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
        // #endregion
        // Si el script no está cargado, redirigir
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Quiz.js:1058',message:'handleUpgrade - ERROR',data:{error:err.message,stack:err.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
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
          <p className="text-gray-600">Loading questions...</p>
        </div>
      </div>
    );
  }

  // Mostrar error si hay problema cargando preguntas
  if (questionsError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error loading questions</h2>
          <p className="text-gray-700 mb-4">{questionsError}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Reload
          </button>
        </div>
      </div>
    );
  }

  // CRITICAL FIX for Bug 2: Don't show "completed" message if we're still loading or restoring
  // This prevents showing the message incorrectly when user returns to quiz
  if (!currentQuestion && !isLoadingQuestions && !isRestoring && !isLoadingFromDatabase && availableQuestions.length > 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Congratulations!
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            You've completed all available questions.
          </p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswer(null);
              setShowExplanation(false);
              setCorrectAnswers(0);
              setAnsweredQuestions(0);
            }}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  // CRITICAL FIX: Ensure currentQuestion exists before accessing properties
  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <p className="text-red-600 mb-4">
            Error: No question available at index {currentQuestionIndex}. Available: {availableQuestions.length}
          </p>
          <button
            onClick={() => {
              setCurrentQuestionIndex(0);
              setSelectedAnswer(null);
              setShowExplanation(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Reset to first question
          </button>
        </div>
      </div>
    );
  }

  // CRITICAL FIX: Ensure currentQuestion exists before accessing properties
  const isCorrect = currentQuestion && selectedAnswer !== null
    ? selectedAnswer === currentQuestion.correct_answer
    : false;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a
            href={isSpanish ? "/es" : "/"}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = isSpanish ? "/es" : "/";
            }}
            className="cursor-pointer inline-block"
            style={{ textDecoration: "none" }}
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
            {(isSignedIn && !isPremium) && (
              <Link
                href={isSpanish ? "/es/pricing" : "/pricing"}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {isSpanish ? "Precios" : "Pricing"}
              </Link>
            )}
            <LanguageSelector />
            {isLoaded && (
              <>
                {!isSignedIn ? (
                  <SignInButton
                    mode="modal"
                    forceRedirectUrl={
                      typeof window !== "undefined"
                        ? window.location.href
                        : isSpanish
                          ? "/es"
                          : "/"
                    }
                    fallbackRedirectUrl={
                      typeof window !== "undefined"
                        ? window.location.href
                        : isSpanish
                          ? "/es"
                          : "/"
                    }
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const currentUrl = window.location.href;
                        localStorage.setItem(
                          "epa608_redirect_after_auth",
                          currentUrl
                        );
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
                        avatarBox: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
                      },
                    }}
                    afterSignOutUrl={isSpanish ? "/es" : "/"}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Quiz Content with padding for navbar */}
      <div className="pt-20 sm:pt-24 p-4 md:p-8 relative">
        {/* Decorative background elements - non-interactive */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle circular gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        {/* Quiz content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header with progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 text-base font-medium">
                Question {currentQuestionIndex + 1} of {displayQuestionCount}
              </span>
              {!isPremium && (
                <span className="text-blue-600 text-base font-semibold">
                  Free Mode
                </span>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / displayQuestionCount) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question with marker on the right */}
          {/* CRITICAL FIX: Only render question section if currentQuestion exists */}
          {!currentQuestion && (isLoadingQuestions || isRestoring || isLoadingFromDatabase) ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">Loading question...</p>
            </div>
          ) : !currentQuestion ? (
            <div className="col-span-full text-center py-12">
              <p className="text-red-600 mb-4">
                Error: No question available at index {currentQuestionIndex}. Available: {availableQuestions.length}
              </p>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Reset to first question
              </button>
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Question Section - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 order-1 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              {/* Image reference (if available) */}
              {currentQuestion.image && (
                <div className="mb-6 w-full">
                  <div className="relative w-full h-auto rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
                    <Image
                      src={currentQuestion.image}
                      alt="Question reference image"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      priority={currentQuestionIndex < 3}
                    />
                  </div>
                </div>
              )}
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                {currentQuestion?.text || 'Loading question...'}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options?.map((option, index) => {
                  let buttonClass =
                    "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ";

                  if (isAnswered && currentQuestion) {
                    if (index === selectedAnswer) {
                      buttonClass += isCorrect
                        ? "bg-green-500 border-green-600 text-white"
                        : "bg-red-500 border-red-600 text-white";
                    } else {
                      buttonClass += "bg-gray-100 border-gray-200 text-gray-500";
                    }
                  } else {
                    buttonClass +=
                      "bg-white border-gray-300 text-slate-900 hover:border-blue-500 hover:bg-blue-50 cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <span className="text-base md:text-lg">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div
                  className={`mt-6 p-4 rounded-lg border-2 ${
                    isCorrect
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✕</span>
                      </div>
                    )}
                    <div>
                      <h3
                        className={`font-semibold mb-1 ${
                          isCorrect ? "text-green-900" : "text-red-900"
                        }`}
                      >
                        {isCorrect ? "Correct!" : "Incorrect"}
                      </h3>
                      <p
                        className={`text-sm md:text-base ${
                          isCorrect ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        {currentQuestion?.explanation || ''}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Next Button - Before score on mobile, after on desktop */}
            {isAnswered && (
              <div className="order-2 lg:order-3 lg:col-span-3 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {currentQuestionIndex + 1 < displayQuestionCount
                    ? "Next"
                    : "Finish"}
                </button>
              </div>
            )}

            {/* Score Marker - 1 column on desktop */}
            <div className="lg:col-span-1 order-3 lg:order-2">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Your Progress
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completed:</span>
                    <span className="text-green-600 font-semibold">
                      {answeredQuestions}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Remaining:</span>
                    <span className="text-blue-600 font-semibold">
                      {displayQuestionCount - answeredQuestions}
                      {!isPremium && ' free'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Premium Modal with PricingSection */}
        {showPremiumModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto"
            onClick={(e) => {
              // Close modal only if clicking the backdrop, not the modal content
              if (e.target === e.currentTarget) {
                handleCloseModal();
              }
            }}
          >
            <div 
              className="bg-gray-50 rounded-2xl max-w-2xl w-full my-4 sm:my-8 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
            >
              {/* Close button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Completion message */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 rounded-t-2xl">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    You've completed the 20 free questions!
                  </h3>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-3">
                    <p className="text-blue-100 text-sm sm:text-base">
                      Unlock 300+ questions to continue practicing and ensure
                      your success on the EPA 608 exam.
                    </p>
                  </div>
                </div>
              </div>

              {/* Integrated PricingSection */}
              <div className="p-4 sm:p-6">
                <div className="bg-white border-2 border-blue-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl relative overflow-hidden">
                  {/* Top Badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
                      ⚡ FLASH SALE: 60% OFF
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
                    Lifetime Access
                  </h2>

                  {/* Price */}
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
                      One-time payment. No monthly subscriptions.
                    </p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">
                        Unlimited access to the Simulator
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">
                        300+ Real Exam Questions
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">
                        Detailed explanations for every answer
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">
                        Timed Exam Mode
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">
                        Guarantee: Pass or get your money back
                      </span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {checkoutError && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600">{checkoutError}</p>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling that might close the modal
                      handleUpgrade();
                    }}
                    disabled={isLoadingCheckout || !isLoaded}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-3"
                  >
                    {isLoadingCheckout ? 'Loading...' : 'Get Instant Access'}
                  </button>

                  {/* Scarcity Text */}
                  <p className="text-center text-xs sm:text-sm text-red-600 font-semibold mb-4">
                    🔥 High Demand: Only 14 discounted licenses remaining
                  </p>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span>Instant Access</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-blue-600" />
                      <span>Money-Back Guarantee</span>
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
          language={isSpanish ? "es" : "en"}
        />
      </div>
    </div>
  );
}

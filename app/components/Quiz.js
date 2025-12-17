"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, Trophy, Shield, Lock, Zap } from "lucide-react";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { questions } from "../data-en";
import AuthModal from "./AuthModal";
import LanguageSelector from "./LanguageSelector";

const QUIZ_STORAGE_KEY = "epa608_quiz_progress";
const QUIZ_STORAGE_KEY_ES = "epa608_quiz_progress_es";

export default function Quiz() {
  const { isSignedIn, isLoaded } = useUser();
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es") || false;
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

  // Calculate free questions answered (first 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);

  // For premium users, show total progress; for non-premium, only first 3
  const totalQuestionsAnswered = isPremium
    ? answeredQuestions
    : freeQuestionsAnswered;

  // Save quiz state to localStorage (save to shared key so progress persists across languages)
  const saveQuizState = () => {
    try {
      const quizState = {
        currentQuestionIndex,
        correctAnswers,
        answeredQuestions,
        answers,
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

  // Restore quiz state from localStorage (check shared key first, then language-specific key)
  const restoreQuizState = () => {
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
          setCurrentQuestionIndex(quizState.currentQuestionIndex || 0);
          setCorrectAnswers(quizState.correctAnswers || 0);
          setAnsweredQuestions(quizState.answeredQuestions || 0);
          setAnswers(quizState.answers || []);
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

  // Restore state on mount and when user signs in
  useEffect(() => {
    if (!isLoaded) return;

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
          .then((data) => {
            if (data.success) sessionStorage.setItem(syncKey, "true");
            sessionStorage.removeItem(syncInProgressKey);
          })
          .catch((err) => {
            console.error("Error syncing user:", err);
            sessionStorage.removeItem(syncInProgressKey);
          });
      }
    }

    if (redirectFlag) {
      // Hay flag de redirect - restaurar estado del quiz
      restoreQuizState();
      // Remover el flag si el usuario está autenticado
      if (isSignedIn) {
        localStorage.removeItem("epa608_redirect_after_auth");
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

  // Save state whenever it changes (but not during restoration)
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

  // Effect to show modal when directly accessing premium question
  useEffect(() => {
    const question = questions[currentQuestionIndex];
    if (question && question.id === 21 && !isPremium) {
      setShowPremiumModal(true);
    }
  }, [currentQuestionIndex, isPremium]);

  const handleAnswerClick = (optionIndex) => {
    if (isAnswered) return; // Don't allow changing answer after selecting

    setSelectedAnswer(optionIndex);
    setShowExplanation(true);

    // Check if answer is correct and update counter
    const isCorrectAnswer = optionIndex === currentQuestion.correctAnswer;
    if (isCorrectAnswer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    // Increment answered questions counter
    setAnsweredQuestions((prev) => prev + 1);

    // Save answer to answers array for persistence
    setAnswers((prev) => {
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

    // Check if next question is #4 (index 3) and user is not signed in
    // Pause the quiz and show auth modal
    if (nextIndex === 3 && !isSignedIn && isLoaded) {
      setShowAuthModal(true);
      // Don't advance - pause the quiz
      return;
    }

    // Check if next question is #21 (id: 21) and user is not premium
    if (
      nextIndex < questions.length &&
      questions[nextIndex].id === 21 &&
      !isPremium
    ) {
      setShowPremiumModal(true);
      return;
    }

    // Advance to next question only if user is signed in (for question 4+) or if it's before question 4
    if (nextIndex < questions.length) {
      // If trying to go to question 4+ and not signed in, don't advance
      if (nextIndex >= 3 && !isSignedIn) {
        setShowAuthModal(true);
        return;
      }

      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleCloseModal = () => {
    setShowPremiumModal(false);
    // User stays on current question (we don't advance if not premium)
  };

  const handleUpgrade = () => {
    // Real payment logic would go here
    setIsPremium(true);
    setShowPremiumModal(false);
    // Advance to next question after becoming premium
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

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

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
            {!isSignedIn && (
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
                Question {currentQuestionIndex + 1} of {questions.length}
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
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Question with marker on the right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Question Section - Takes 2 columns on desktop */}
            <div className="lg:col-span-2 order-1 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                {currentQuestion.text}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass =
                    "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ";

                  if (isAnswered) {
                    if (index === currentQuestion.correctAnswer) {
                      buttonClass += "bg-green-500 border-green-600 text-white";
                    } else if (index === selectedAnswer && !isCorrect) {
                      buttonClass += "bg-red-500 border-red-600 text-white";
                    } else {
                      buttonClass +=
                        "bg-gray-100 border-gray-200 text-gray-500";
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
                        {currentQuestion.explanation}
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
                  {currentQuestionIndex + 1 < questions.length
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
                      {currentQuestionIndex + 1}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Remaining:</span>
                    <span className="text-blue-600 font-semibold">
                      {questions.length - (currentQuestionIndex + 1)}
                      {!isPremium && currentQuestionIndex + 1 < 20 && ` free`}
                    </span>
                  </div>
                  {!isPremium && currentQuestionIndex + 1 >= 20 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-blue-600 text-xs text-center font-medium">
                        💡 You've completed the free trial. Unlock more
                        questions to continue.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Modal with PricingSection */}
        {showPremiumModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-gray-50 rounded-2xl max-w-2xl w-full my-4 sm:my-8 shadow-2xl relative">
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

                  {/* CTA Button */}
                  <button
                    onClick={handleUpgrade}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-3"
                  >
                    Get Instant Access
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

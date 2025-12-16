'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { questions } from '../data-en';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = selectedAnswer !== null;
  
  // Calculate free questions answered (first 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);
  
  // For premium users, show total progress; for non-premium, only first 3
  const totalQuestionsAnswered = isPremium ? answeredQuestions : freeQuestionsAnswered;

  // Effect to show modal when directly accessing premium question
  useEffect(() => {
    const question = questions[currentQuestionIndex];
    if (question && question.id === 4 && !isPremium) {
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
      setCorrectAnswers(prev => prev + 1);
    }
    
    // Increment answered questions counter
    setAnsweredQuestions(prev => prev + 1);
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    // Check if next question is #4 (id: 4) and user is not premium
    if (nextIndex < questions.length && questions[nextIndex].id === 4 && !isPremium) {
      setShowPremiumModal(true);
      return;
    }

    // Advance to next question
    if (nextIndex < questions.length) {
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Congratulations!</h2>
          <p className="text-xl text-gray-700 mb-8">You've completed all available questions.</p>
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
    <div className="min-h-screen bg-gray-50 text-slate-900 p-4 md:p-8 relative overflow-hidden">
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
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question with marker on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Question Section - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
            {currentQuestion.text}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ";
              
              if (isAnswered) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "bg-green-500 border-green-600 text-white";
                } else if (index === selectedAnswer && !isCorrect) {
                  buttonClass += "bg-red-500 border-red-600 text-white";
                } else {
                  buttonClass += "bg-gray-100 border-gray-200 text-gray-500";
                }
              } else {
                buttonClass += "bg-white border-gray-300 text-slate-900 hover:border-blue-500 hover:bg-blue-50 cursor-pointer";
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
                    {isCorrect ? 'Correct!' : 'Incorrect'}
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

          {/* Score Marker - 1 column on desktop */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Score:</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {totalQuestionsAnswered > 0 
                      ? `${Math.round((correctAnswers / totalQuestionsAnswered) * 100)}%`
                      : '0%'
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Correct:</span>
                  <span className="text-green-600 font-semibold">{correctAnswers}/{totalQuestionsAnswered}</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed:</span>
                  <span className="text-green-600 font-semibold">{currentQuestionIndex + 1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="text-blue-600 font-semibold">{questions.length - (currentQuestionIndex + 1)}</span>
                </div>
                {!isPremium && currentQuestionIndex + 1 >= 3 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-blue-600 text-xs text-center font-medium">
                      💡 You've completed the free trial. Unlock more questions to continue.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        {isAnswered && (
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {currentQuestionIndex + 1 < questions.length ? 'Next' : 'Finish'}
            </button>
          </div>
        )}
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
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Completion message */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 rounded-t-2xl">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  You've completed the 3 free questions!
                </h3>
                {freeQuestionsAnswered > 0 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-3">
                    <div className="text-green-300 font-bold text-2xl sm:text-3xl mb-1">
                      ✅ {correctAnswers}/{freeQuestionsAnswered} correct
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base">
                      {correctAnswers === 3 && "Excellent performance! Unlock 300+ questions to ensure your success."}
                      {correctAnswers === 2 && "You're doing great. With more practice you'll master the exam completely."}
                      {correctAnswers === 1 && "Every question counts. Get access to detailed explanations and more practice."}
                      {correctAnswers === 0 && "With full access and detailed explanations, you'll improve quickly."}
                    </p>
                  </div>
                )}
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
    </div>
  );
}

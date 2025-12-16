'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { questions } from '../es/data';

export default function QuizEs() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = selectedAnswer !== null;
  
  // Calcular preguntas gratuitas respondidas (primeras 3)
  const freeQuestionsAnswered = Math.min(answeredQuestions, 3);
  
  // Para usuarios premium, mostrar progreso total; para no premium, solo las primeras 3
  const totalQuestionsAnswered = isPremium ? answeredQuestions : freeQuestionsAnswered;

  // Efecto para mostrar el modal cuando se accede directamente a pregunta premium
  useEffect(() => {
    const question = questions[currentQuestionIndex];
    if (question && question.id === 4 && !isPremium) {
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
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    // Verificar si la siguiente pregunta es la 4 (id: 4) y el usuario no es premium
    if (nextIndex < questions.length && questions[nextIndex].id === 4 && !isPremium) {
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
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Reiniciar Quiz
            </button>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 p-4 md:p-8 relative overflow-hidden">
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
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
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

          {/* Marcador de puntuación - 1 columna en desktop */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-4">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Tu Progreso</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Puntuación:</span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-600">
                    {totalQuestionsAnswered > 0 
                      ? `${Math.round((correctAnswers / totalQuestionsAnswered) * 100)}%`
                      : '0%'
                    }
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Correctas:</span>
                  <span className="text-green-600 font-semibold text-sm sm:text-base">{correctAnswers}/{totalQuestionsAnswered}</span>
                </div>
                <div className="h-px bg-gray-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Completadas:</span>
                  <span className="text-green-600 font-semibold text-sm sm:text-base">{currentQuestionIndex + 1}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm sm:text-base">Restantes:</span>
                  <span className="text-blue-600 font-semibold text-sm sm:text-base">{questions.length - (currentQuestionIndex + 1)}</span>
                </div>
                {!isPremium && currentQuestionIndex + 1 >= 3 && (
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

        {/* Botón Siguiente */}
        {isAnswered && (
          <div className="flex justify-end mt-4 sm:mt-6">
            <button
              onClick={handleNext}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 touch-manipulation min-w-[120px]"
            >
              {currentQuestionIndex + 1 < questions.length ? 'Siguiente' : 'Finalizar'}
            </button>
          </div>
        )}
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
                  ¡Has completado las 3 preguntas gratuitas!
                </h3>
                {freeQuestionsAnswered > 0 && (
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 mt-3">
                    <div className="text-green-300 font-bold text-2xl sm:text-3xl mb-1">
                      ✅ {correctAnswers}/{freeQuestionsAnswered} correctas
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base">
                      {correctAnswers === 3 && "¡Excelente rendimiento! Desbloquea 300+ preguntas para asegurar tu aprobación."}
                      {correctAnswers === 2 && "Vas muy bien. Con más práctica dominarás el examen completamente."}
                      {correctAnswers === 1 && "Cada pregunta cuenta. Accede a explicaciones detalladas y más práctica."}
                      {correctAnswers === 0 && "Con acceso completo y explicaciones detalladas, mejorarás rápidamente."}
                    </p>
                  </div>
                )}
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
    </div>
  );
}

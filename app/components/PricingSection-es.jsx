'use client';

import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';

export default function PricingSectionEs({ 
  badge = "⚡ OFERTA FLASH: 60% DE DESCUENTO",
  title = "Acceso de Por Vida",
  oldPrice = "$29.99",
  price = "$9.99",
  priceDescription = "Pago único. Sin suscripciones mensuales.",
  features = [
    "Acceso ilimitado al Simulador",
    "Banco de 300+ Preguntas Reales",
    "Explicaciones detalladas de cada respuesta",
    "Modo Examen Cronometrado",
    "Garantía: Aprueba o te devolvemos tu dinero"
  ],
  ctaButton = "Obtener Acceso Inmediato",
  scarcityText = "🔥 Alta Demanda: Solo quedan 14 licencias con descuento",
  trustBadges = {
    secure: "Pago Seguro",
    instant: "Acceso Instantáneo",
    guarantee: "Garantía de Devolución"
  },
  onPurchase
}) {
  const handlePurchase = () => {
    if (onPurchase) {
      onPurchase();
    } else {
      // Aquí iría la lógica de compra
      alert('Redirigiendo a la página de pago...');
      // window.location.href = '/checkout';
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Tarjeta de Precio */}
        <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Badge Superior */}
          <div className="text-center mb-6">
            <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-sm sm:text-base font-bold px-4 py-2 rounded-full shadow-lg">
              {badge}
            </span>
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
            {title}
          </h2>

          {/* Precio */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xl sm:text-2xl text-gray-500 line-through">
                {oldPrice}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
                {price}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {priceDescription}
            </p>
          </div>

          {/* Lista de Beneficios */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Botón CTA */}
          <button
            onClick={handlePurchase}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-[1.02] mb-4 touch-manipulation min-h-[48px]"
          >
            {ctaButton}
          </button>

          {/* Texto de Escasez */}
          <p className="text-center text-sm sm:text-base text-red-600 font-semibold mb-6">
            {scarcityText}
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>{trustBadges.secure}</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>{trustBadges.instant}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>{trustBadges.guarantee}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

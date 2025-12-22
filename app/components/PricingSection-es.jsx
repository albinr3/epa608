'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

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
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Anti-regresión (bug real):
  // La versión ES históricamente tenía un placeholder `alert('Redirigiendo...')` y NO abría el checkout.
  // Este componente debe mantenerse funcionalmente equivalente a `PricingSection.jsx` (inglés):
  // - Nunca llamar a Lemon Squeezy directo desde el browser (expondría API keys).
  // - Siempre pedir al backend `POST /api/checkout` para obtener `checkoutUrl`.
  // - Abrir el checkout via overlay (`window.LemonSqueezy.Url.Open`) si el script está cargado; si no, fallback a redirect.
  //
  // Cargar script de Lemon Squeezy (overlay)
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.LemonSqueezy) {
      const script = document.createElement('script');
      script.src = 'https://app.lemonsqueezy.com/js/lemon.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const startCheckout = async () => {
    // Flujo de checkout:
    // 1) Verifica Clerk (auth) 2) Llama `POST /api/checkout` 3) Abre overlay o redirige a `checkoutUrl`.
    // Verificar autenticación
    if (!isLoaded) return;

    if (!isSignedIn) {
      router.push('/sign-in?redirect_url=' + encodeURIComponent(window.location.href));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'No se pudo crear el checkout');
      }

      if (data.checkoutUrl && window.LemonSqueezy) {
        window.LemonSqueezy.Url.Open(data.checkoutUrl);
      } else if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No se recibió URL de checkout');
      }
    } catch (err) {
      console.error('Error creating checkout (ES):', err);
      setError(err.message || 'No se pudo iniciar el checkout. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePurchase = async () => {
    // Anti-regresión: no reintroducir `alert('Redirigiendo...')` aquí.
    // Si no se provee `onPurchase`, el fallback SIEMPRE debe ser `startCheckout()`.
    if (onPurchase) {
      onPurchase();
    } else {
      await startCheckout();
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
            disabled={isLoading || !isLoaded}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-[1.02] mb-4 touch-manipulation min-h-[48px]"
          >
            {isLoading ? 'Cargando...' : ctaButton}
          </button>

          {/* Error */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

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

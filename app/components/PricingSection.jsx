'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2, Shield, Lock, Zap } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function PricingSection({ 
  badge = "⚡ FLASH SALE: 60% OFF",
  title = "Lifetime Access",
  oldPrice = "$29.99",
  price = "$9.99",
  priceDescription = "One-time payment. No monthly subscriptions.",
  features = [
    "Unlimited access to the Simulator",
    "300+ Real Exam Questions",
    "Detailed explanations for every answer",
    "Timed Exam Mode",
    "Guarantee: Pass or get your money back"
  ],
  ctaButton = "Get Instant Access",
  scarcityText = "🔥 High Demand: Only 14 discounted licenses remaining",
  trustBadges = {
    secure: "Secure Payment",
    instant: "Instant Access",
    guarantee: "Money-Back Guarantee"
  },
  onPurchase
}) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Cargar script de Lemon Squeezy
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.LemonSqueezy) {
      const script = document.createElement('script');
      script.src = 'https://app.lemonsqueezy.com/js/lemon.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handlePurchase = async () => {
    if (onPurchase) {
      onPurchase();
      return;
    }

    // Verificar autenticación
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      // Redirigir a login si no está autenticado
      router.push('/sign-in?redirect_url=' + encodeURIComponent(window.location.href));
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Llamar a la API para crear checkout
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

      if (data.checkoutUrl && window.LemonSqueezy) {
        // Abrir checkout overlay de Lemon Squeezy
        window.LemonSqueezy.Url.Open(data.checkoutUrl);
      } else if (data.checkoutUrl) {
        // Si el script no está cargado, redirigir
        window.location.href = data.checkoutUrl;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      console.error('Error creating checkout:', err);
      setError(err.message || 'Failed to start checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Price Card */}
        <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          {/* Top Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white text-sm sm:text-base font-bold px-4 py-2 rounded-full shadow-lg">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center mb-6">
            {title}
          </h2>

          {/* Price */}
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

          {/* Benefits List */}
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

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* CTA Button */}
          <button
            onClick={handlePurchase}
            disabled={isLoading || !isLoaded}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] mb-4"
          >
            {isLoading ? 'Loading...' : ctaButton}
          </button>

          {/* Scarcity Text */}
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

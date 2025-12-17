'use client';

import { useUser, useClerk, useSignIn } from '@clerk/nextjs';
import { PartyPopper } from 'lucide-react';
import { useEffect } from 'react';

export default function AuthModal({ isOpen, onClose, language = 'en' }) {
  const { isSignedIn, isLoaded } = useUser();
  const clerk = useClerk();
  const { signIn, isLoaded: signInLoaded } = useSignIn();

  const isSpanish = language === 'es';

  // Close modal automatically when user signs in
  useEffect(() => {
    if (isLoaded && isSignedIn && isOpen) {
      onClose();
    }
  }, [isSignedIn, isLoaded, isOpen, onClose]);

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();
    
    // Guardar la URL actual para redirigir después del login
    const currentUrl = window.location.href;
    const callbackUrl = '/sso-callback';
    localStorage.setItem('epa608_redirect_after_auth', currentUrl);
    
    // Esperar a que signIn esté cargado
    if (!signInLoaded) {
      return;
    }
    
    try {
      // Usar signIn.authenticateWithRedirect para OAuth social
      // IMPORTANTE: redirectUrl debe apuntar a la ruta donde está <AuthenticateWithRedirectCallback />
      // redirectUrlComplete es donde se redirige después de completar la autenticación
      if (signIn) {
        await signIn.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: callbackUrl,
          redirectUrlComplete: currentUrl,
        });
      } else {
        // Si signIn no está disponible, crear uno nuevo
        const newSignIn = await clerk.client.signIn.create({
          strategy: 'oauth_google',
        });
        await newSignIn.authenticateWithRedirect({
          redirectUrl: callbackUrl,
          redirectUrlComplete: currentUrl,
        });
      }
    } catch (error) {
      // Si hay error, intentar con clerk directamente
      try {
        await clerk.authenticateWithRedirect({
          strategy: 'oauth_google',
          redirectUrl: callbackUrl,
          redirectUrlComplete: currentUrl,
        });
      } catch (fallbackError) {
        // Último recurso: abrir modal (no ideal pero funciona)
        clerk.openSignUp({
          strategy: 'oauth_google',
          redirectUrl: currentUrl,
        });
      }
    }
  };

  const handleEmailSignUp = () => {
    // Guardar la URL actual para redirigir después del login
    const currentUrl = window.location.href;
    localStorage.setItem('epa608_redirect_after_auth', currentUrl);
    
    clerk.openSignUp({
      redirectUrl: currentUrl,
    });
  };

  if (!isOpen) return null;

  // Texts based on language
  const texts = {
    en: {
      title: 'Great streak! Save your progress.',
      keyText: "Don't lose your progress. Sign up free now to unlock the next 17 practice questions at no cost.",
      subtext: 'No credit card required.',
      googleButton: 'Continue with Google',
      emailButton: 'Continue with Email',
    },
    es: {
      title: '¡Excelente racha! Guarda tu progreso.',
      keyText: 'No pierdas tu avance. Regístrate gratis ahora para desbloquear las siguientes 17 preguntas de práctica sin costo.',
      subtext: 'No se requiere tarjeta de crédito.',
      googleButton: 'Continuar con Google',
      emailButton: 'Continuar con Email',
    },
  };

  const t = texts[isSpanish ? 'es' : 'en'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm" style={{ animation: 'fadeIn 0.3s ease-out' }}>
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl relative overflow-hidden" style={{ animation: 'zoomIn 0.3s ease-out' }}>
        {/* Content */}
        <div className="p-8">
          {/* Animated PartyPopper Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-br from-pink-400 to-pink-600 rounded-full p-4 animate-bounce shadow-lg">
                <PartyPopper className="w-12 h-12 text-white" fill="white" />
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t.title}
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
              {t.keyText}
            </p>
            <p className="text-gray-500 text-sm">
              {t.subtext}
            </p>
          </div>

          {/* Google Sign Up - Large and Prominent */}
          <div className="mb-4">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full bg-white border-2 border-gray-300 hover:border-blue-500 text-slate-900 font-semibold text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {t.googleButton}
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">{isSpanish ? 'o' : 'or'}</span>
            </div>
          </div>

          {/* Email Sign Up - Secondary/Subtle */}
          <div>
            <button
              onClick={handleEmailSignUp}
              className="w-full bg-gray-50 hover:bg-gray-100 text-slate-700 font-medium text-sm sm:text-base py-3 px-6 rounded-xl transition-all duration-300 border border-gray-200 active:scale-[0.98]"
            >
              {t.emailButton}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}


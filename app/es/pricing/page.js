'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import PricingSection from '../../components/PricingSection-es';
import LanguageSelector from '../../components/LanguageSelector';

export default function PricingPageEs() {
  const { isSignedIn, isLoaded } = useUser();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/es">
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
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <Link
              href="/es/pricing"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 font-semibold transition-colors duration-300"
            >
              Precios
            </Link>
            <Link
              href="/es"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.setItem('epa608_show_quiz', 'true');
                }
              }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Quiz
            </Link>
            <LanguageSelector />
            {isLoaded && (
              <>
                {!isSignedIn ? (
                  <SignInButton 
                    mode="modal"
                    forceRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/es/pricing'}
                    fallbackRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/es/pricing'}
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
                    afterSignOutUrl="/es/pricing"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <div className="pt-20 sm:pt-24">
        <PricingSection />
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} HVAC Prep. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

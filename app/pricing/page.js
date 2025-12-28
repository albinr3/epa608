'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { ChevronDown } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import LanguageSelector from '../components/LanguageSelector';

// Componente dropdown para Quiz
function QuizDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const quizOptions = [
    { label: 'Universal', type: 'universal', href: '/?quiz=1&type=universal' },
    { label: 'Type I', type: 'type1', href: '/?quiz=1&type=type1' },
    { label: 'Type II', type: 'type2', href: '/?quiz=1&type=type2' },
    { label: 'Type III', type: 'type3', href: '/?quiz=1&type=type3' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium flex items-center gap-1"
      >
        Quiz
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              {quizOptions.map((option) => (
                <Link
                  key={option.type || 'all'}
                  href={option.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm sm:text-base text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function PricingPage() {
  const { isSignedIn, isLoaded } = useUser();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/">
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
            {!isSignedIn && (
              <Link
                href="/pricing"
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 font-semibold transition-colors duration-300"
              >
                Pricing
              </Link>
            )}
            <QuizDropdown />
            <LanguageSelector />
            {isLoaded && (
              <>
                {!isSignedIn ? (
                  <SignInButton 
                    mode="modal"
                    forceRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/pricing'}
                    fallbackRedirectUrl={typeof window !== 'undefined' ? window.location.href : '/pricing'}
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
                    afterSignOutUrl="/pricing"
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
            © {new Date().getFullYear()} HVAC Prep. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

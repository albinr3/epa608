'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useUser } from '@clerk/nextjs';

// Componente interno que usa useSearchParams
function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const [countdown, setCountdown] = useState(5);
  const checkout = searchParams.get('checkout');

  useEffect(() => {
    if (checkout === 'success' && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (checkout === 'success' && countdown === 0) {
      // Redirigir al quiz después de 5 segundos
      router.push('/');
    }
  }, [checkout, countdown, router]);

  if (checkout !== 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

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
          <Link
            href="/"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Quiz
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 sm:pt-40 pb-12 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 sm:p-10 md:p-12 shadow-xl text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle2 className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h1>

            {/* Message */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Thank you for your purchase. Your premium access has been activated.
            </p>

            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
              <h2 className="text-xl font-bold text-gray-900 mb-4">You now have access to:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited access to the Simulator</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">300+ Real Exam Questions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detailed explanations for every answer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Timed Exam Mode</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('epa608_show_quiz', 'true');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                Start Practicing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Countdown */}
            {countdown > 0 && (
              <p className="text-sm text-gray-500 mt-6">
                Redirecting to quiz in {countdown} second{countdown !== 1 ? 's' : ''}...
              </p>
            )}

            {/* Note */}
            <p className="text-xs text-gray-500 mt-8">
              If your premium access doesn't appear immediately, please refresh the page or contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal que envuelve en Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}


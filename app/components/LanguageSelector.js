'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isSpanish = pathname.startsWith('/es');

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setIsOpen(false);
    
    let newPath;
    
    if (lang === 'es' && !isSpanish) {
      // Cambiar a español
      if (pathname === '/') {
        newPath = '/es';
      } else if (pathname === '/pricing') {
        newPath = '/es/pricing';
      } else {
        newPath = `/es${pathname}`;
      }
    } else if (lang === 'en' && isSpanish) {
      // Cambiar a inglés
      if (pathname === '/es') {
        newPath = '/';
      } else if (pathname === '/es/pricing') {
        newPath = '/pricing';
      } else {
        newPath = pathname.replace(/^\/es/, '') || '/';
      }
    } else {
      // Ya está en el idioma seleccionado
      return;
    }
    
    // Guardar la preferencia del usuario en una cookie con SameSite=None para asegurar que funcione
    const cookieValue = `language-preference=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    document.cookie = cookieValue;
    
    // Agregar un pequeño delay para asegurar que la cookie se establezca antes de redirigir
    setTimeout(() => {
      window.location.href = newPath;
    }, 50);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium touch-manipulation"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{isSpanish ? 'ES' : 'EN'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 sm:w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition-colors ${
              !isSpanish ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('es')}
            className={`w-full text-left px-4 py-2 text-sm sm:text-base hover:bg-gray-100 transition-colors ${
              isSpanish ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
            }`}
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
}

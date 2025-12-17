'use client';
import { AuthenticateWithRedirectCallback, useUser } from '@clerk/nextjs';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SSOCallback() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const hasRedirected = useRef(false);

  /**
   * FIX CRÍTICO: Preservación de idioma después de autenticación OAuth
   * 
   * PROBLEMA:
   * Cuando un usuario se autentica con Google desde la versión en español (/es),
   * Clerk redirige a / (inglés) en lugar de respetar redirectUrlComplete con /es.
   * Esto causa que usuarios que iniciaron en español terminen viendo la versión
   * en inglés después del login.
   * 
   * SOLUCIÓN:
   * Interceptar la redirección después de que Clerk complete la autenticación y
   * verificar si el usuario debería estar en /es basándose en:
   * 1. Su cookie de idioma (language-preference)
   * 2. La URL guardada en localStorage (epa608_redirect_after_auth)
   * 
   * Si detectamos que el usuario está en / pero debería estar en /es, redirigimos
   * automáticamente a la ruta correcta preservando el idioma seleccionado.
   * 
   * IMPORTANCIA:
   * Este código es esencial para mantener la consistencia del idioma después de OAuth.
   * Sin este fix, la experiencia de usuario se rompe para usuarios de habla hispana
   * que se autentican con Google, ya que terminan viendo la versión en inglés
   * a pesar de haber iniciado en español.
   * 
   * ⚠️ NO ELIMINAR: Este fix resuelve un bug crítico de UX.
   * Si se elimina, el problema regresará y los usuarios verán el idioma incorrecto
   * después de autenticarse con Google.
   */
  useEffect(() => {
    if (!isLoaded || hasRedirected.current) return;

    // Esperar un momento para que Clerk complete su redirección interna
    const checkRedirect = setTimeout(() => {
      if (isSignedIn && typeof window !== 'undefined') {
        const savedUrl = localStorage.getItem('epa608_redirect_after_auth');
        const currentPath = window.location.pathname;
        const languagePref = document.cookie.split(';').find(c => c.trim().startsWith('language-preference='))?.split('=')[1] || 'not-found';
        
        // Si estamos en la raíz pero deberíamos estar en /es, o si tenemos una URL guardada con /es
        const shouldBeInEs = languagePref === 'es' || (savedUrl && savedUrl.includes('/es'));
        const isInWrongPath = currentPath === '/' && shouldBeInEs;

        if (isInWrongPath || (savedUrl && savedUrl.includes('/es') && !currentPath.startsWith('/es'))) {
          // Extraer el pathname de la URL guardada o construir /es
          let targetPath = '/es';
          if (savedUrl) {
            try {
              const url = new URL(savedUrl);
              targetPath = url.pathname;
            } catch (e) {
              // Si savedUrl no es una URL completa, usar directamente
              if (savedUrl.startsWith('/es')) {
                targetPath = savedUrl;
              } else {
                targetPath = '/es';
              }
            }
          }
          
          hasRedirected.current = true;
          router.push(targetPath);
        }
      }
    }, 500); // Pequeño delay para que Clerk complete su proceso

    return () => clearTimeout(checkRedirect);
  }, [isLoaded, isSignedIn, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-600 animate-pulse">Iniciando sesión…</p>
      <AuthenticateWithRedirectCallback />
    </div>
  );
}

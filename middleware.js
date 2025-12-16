import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Si está en rutas específicas, no hacer nada
  if (pathname.startsWith('/api') || 
      pathname.startsWith('/_next') ||
      pathname.includes('.')) {
    return NextResponse.next();
  }
  
  // Obtener la cookie de preferencia de idioma
  const languagePreference = request.cookies.get('language-preference')?.value;
  
  // Si el usuario ya tiene una preferencia guardada, respetarla
  if (languagePreference) {
    // Si la preferencia es español pero está en inglés, redirigir
    if (languagePreference === 'es' && !pathname.startsWith('/es') && pathname !== '/') {
      const url = request.nextUrl.clone();
      if (pathname === '/pricing') {
        url.pathname = '/es/pricing';
      } else {
        url.pathname = `/es${pathname}`;
      }
      return NextResponse.redirect(url);
    }
    // Si la preferencia es inglés pero está en español, redirigir
    else if (languagePreference === 'en' && pathname.startsWith('/es')) {
      const url = request.nextUrl.clone();
      if (pathname === '/es') {
        url.pathname = '/';
      } else if (pathname === '/es/pricing') {
        url.pathname = '/pricing';
      } else {
        url.pathname = pathname.replace(/^\/es/, '') || '/';
      }
      return NextResponse.redirect(url);
    }
    // Si ya está en el idioma correcto, continuar
    return NextResponse.next();
  }
  
  // Si no hay preferencia guardada, solo redirigir desde la raíz en la primera visita
  // y solo si el usuario no está ya en una ruta específica
  if (pathname !== '/') {
    return NextResponse.next();
  }
  
  // Obtener el idioma preferido del navegador solo para la primera visita
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Detectar si el idioma es español
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase());
  
  const isSpanish = languages.some(lang => lang.startsWith('es')) && 
                    !languages.some(lang => lang.startsWith('en') && languages.indexOf(lang) < languages.findIndex(l => l.startsWith('es')));
  
  // Si el usuario prefiere español y no tiene preferencia guardada, redirigir a /es
  if (isSpanish) {
    const url = request.nextUrl.clone();
    url.pathname = '/es';
    const response = NextResponse.redirect(url);
    // Guardar la preferencia automática
    response.cookies.set('language-preference', 'es', { 
      maxAge: 60 * 60 * 24 * 365, // 1 año
      path: '/',
      SameSite: 'Lax'
    });
    return response;
  }
  
  // Si prefiere inglés, guardar la preferencia
  const response = NextResponse.next();
  response.cookies.set('language-preference', 'en', { 
    maxAge: 60 * 60 * 24 * 365, // 1 año
    path: '/',
    SameSite: 'Lax'
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};

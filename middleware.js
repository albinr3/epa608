import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Definimos las rutas públicas (incluyendo el webhook y el callback de OAuth)
const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/terms",
  "/privacy",
  "/contact",
  "/epa-608-practice-test",
  "/epa-608-universal-practice-test",
  "/what-is-epa-certification",
  "/es",
  "/es/(.*)", // All Spanish routes (includes /es/pricing, /es/terms, etc.)
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sso-callback", // Ruta de callback de OAuth de Clerk
  "/api/webhooks(.*)", // <--- ESTO ES LO IMPORTANTE
  "/api/users/sync", // Permitir que pase sin auth.protect(), la autenticación se verifica en el endpoint
  "/api/questions", // API pública para obtener preguntas (la autenticación se verifica dentro)
]);

export default clerkMiddleware(async (auth, request) => {
  const { pathname, searchParams } = request.nextUrl;

  // Ignorar archivos internos de Next.js
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // IMPORTANTE: No interferir con callbacks de OAuth de Clerk
  // Clerk usa parámetros de query especiales para procesar callbacks
  // También la ruta /sso-callback debe procesarse sin interferencia
  const hasClerkCallback =
    searchParams.has("__clerk_redirect_url") ||
    searchParams.has("__clerk_state") ||
    searchParams.toString().includes("__clerk") ||
    pathname === "/sso-callback" ||
    pathname.includes("/sso-callback") ||
    pathname.includes("/callback");

  if (hasClerkCallback) {
    // Dejar que Clerk procese el callback sin interferencia
    // No hacer redirecciones de idioma que puedan interrumpir el flujo de OAuth
    return NextResponse.next();
  }

  /**
   * FIX CRÍTICO: Corrección de redirección de idioma después de OAuth
   * 
   * PROBLEMA:
   * Cuando un usuario se autentica con Google desde la versión en español (/es),
   * el flujo es el siguiente:
   * 1. Usuario está en /es → hace clic en "Continuar con Google"
   * 2. Clerk procesa OAuth y redirige de vuelta
   * 3. Clerk redirige a / (inglés) en lugar de /es, ignorando redirectUrlComplete
   * 
   * Esto causa que usuarios que iniciaron en español terminen viendo la versión
   * en inglés después del login, rompiendo la experiencia de usuario.
   * 
   * SOLUCIÓN:
   * Interceptar las peticiones a / (raíz) ANTES de la lógica de idioma general
   * (ver línea 79+). Si detectamos que:
   * - El pathname es "/"
   * - NO es un callback activo de Clerk (ya procesado)
   * - La cookie language-preference es "es"
   * 
   * Entonces redirigimos automáticamente a /es para preservar el idioma.
   * 
   * IMPORTANCIA:
   * Este código debe ejecutarse ANTES de la lógica de idioma general para capturar
   * específicamente el caso de post-OAuth. Es un fix crítico que complementa
   * la solución en app/sso-callback/page.js.
   * 
   * ⚠️ NO ELIMINAR: Este fix resuelve un bug crítico de UX.
   * Si se elimina, el problema regresará y los usuarios verán el idioma incorrecto
   * después de autenticarse con Google. Este bloque debe mantenerse ANTES de la
   * lógica de idioma general para funcionar correctamente.d
   */
  if (pathname === "/" && !hasClerkCallback) {
    const languagePreference = request.cookies.get("language-preference")?.value;
    
    // Si la preferencia es español y estamos en la raíz, redirigir a /es
    // Esto captura el caso donde Clerk redirige a / después del OAuth
    if (languagePreference === "es") {
      const url = request.nextUrl.clone();
      url.pathname = "/es";
      return NextResponse.redirect(url);
    }
  }

  // Para APIs, solo procesar /api/users/sync (necesita autenticación)
  // Otras APIs pasan sin procesar
  if (pathname.startsWith("/api")) {
    if (pathname === "/api/users/sync") {
      // Dejar que Clerk procese la autenticación, continuar con el flujo
    } else {
      // Para otras APIs (webhooks, etc.), pasar sin procesar
      return NextResponse.next();
    }
  }

  // Si es una ruta pública (y no es /api/users/sync), no hacer redirecciones de idioma para APIs
  if (isPublicRoute(request)) {
    if (pathname.startsWith("/api") && pathname !== "/api/users/sync") {
      return NextResponse.next();
    }
  }
  // No aplicar lógica de idioma a rutas API
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // --- TU LÓGICA DE IDIOMA (Tal cual la tenías) ---
  const languagePreference = request.cookies.get("language-preference")?.value;

  if (languagePreference) {
    if (
      languagePreference === "es" &&
      !pathname.startsWith("/es") &&
      pathname !== "/"
    ) {
      const url = request.nextUrl.clone();
      if (pathname === "/pricing") url.pathname = "/es/pricing";
      else url.pathname = `/es${pathname}`;
      return NextResponse.redirect(url);
    } else if (languagePreference === "en" && pathname.startsWith("/es")) {
      // No redirigir si es una ruta pública específica en español (como la página pillar)
      if (pathname === "/es/epa-608-practice-test-en-espanol") {
        return NextResponse.next();
      }
      const url = request.nextUrl.clone();
      if (pathname === "/es") url.pathname = "/";
      else if (pathname === "/es/pricing") url.pathname = "/pricing";
      else url.pathname = pathname.replace(/^\/es/, "") || "/";
      return NextResponse.redirect(url);
    }
  }

  if (pathname === "/") {
    // No redirigir si hay parámetros de callback de Clerk
    if (!hasClerkCallback) {
      const acceptLanguage = request.headers.get("accept-language") || "";
      const languages = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim().toLowerCase());

      const isSpanish =
        languages.some((lang) => lang.startsWith("es")) &&
        !languages.some(
          (lang) =>
            lang.startsWith("en") &&
            languages.indexOf(lang) <
              languages.findIndex((l) => l.startsWith("es"))
        );

      if (isSpanish && !languagePreference) {
        const url = request.nextUrl.clone();
        url.pathname = "/es";
        const response = NextResponse.redirect(url);
        response.cookies.set("language-preference", "es", {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
          SameSite: "Lax",
        });
        return response;
      }

      if (!languagePreference) {
        const response = NextResponse.next();
        response.cookies.set("language-preference", "en", {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
          SameSite: "Lax",
        });
        return response;
      }
    }
  }
  // ---------------------------------------------

  // Proteger rutas que NO sean públicas
  // /api/users/sync está en isPublicRoute para que pase sin auth.protect()
  // La autenticación se verifica dentro del endpoint usando auth()
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // HE QUITADO "api|" DE AQUÍ PARA QUE EL MIDDLEWARE FUNCIONE EN APIS
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

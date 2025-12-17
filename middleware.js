import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Definimos las rutas públicas (incluyendo el webhook y el callback de OAuth)
const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/es",
  "/es/pricing",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/sso-callback", // Ruta de callback de OAuth de Clerk
  "/api/webhooks(.*)", // <--- ESTO ES LO IMPORTANTE
  "/api/users/sync", // Permitir que pase sin auth.protect(), la autenticación se verifica en el endpoint
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

  // Para APIs, solo procesar /api/users/sync (necesita autenticación)
  // Otras APIs pasan sin procesar
  if (pathname.startsWith("/api")) {
    if (pathname === "/api/users/sync") {
      // #region agent log
      const logData = {
        location: "middleware.js:43",
        message: "Processing /api/users/sync",
        data: { pathname, method: request.method, hasAuth: true },
        timestamp: Date.now(),
        sessionId: "debug-session",
        runId: "run4",
        hypothesisId: "H",
      };
      fetch(
        "http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logData),
        }
      ).catch(() => {});
      // #endregion
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

  // #region agent log
  if (pathname === "/api/users/sync") {
    const logData = {
      location: "middleware.js:112",
      message: "About to return NextResponse.next for /api/users/sync",
      data: { pathname, method: request.method },
      timestamp: Date.now(),
      sessionId: "debug-session",
      runId: "run4",
      hypothesisId: "H",
    };
    fetch("http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    }).catch(() => {});
  }
  // #endregion

  return NextResponse.next();
});

export const config = {
  matcher: [
    // HE QUITADO "api|" DE AQUÍ PARA QUE EL MIDDLEWARE FUNCIONE EN APIS
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

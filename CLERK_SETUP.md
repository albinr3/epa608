# Configuración de Clerk - Guía de Integración

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Pasos para Obtener las Claves de API

1. **Crear una cuenta en Clerk**
   - Ve a https://clerk.com y crea una cuenta gratuita

2. **Crear una nueva aplicación**
   - En el dashboard, haz clic en "Create Application"
   - Elige un nombre para tu aplicación (ej: "HVAC Prep")
   - Selecciona "Next.js" como framework

3. **Obtener las claves de API**
   - En el dashboard, ve a "API Keys" en el menú lateral
   - Copia el `Publishable Key` (empieza con `pk_test_` o `pk_live_`)
   - Copia el `Secret Key` (empieza con `sk_test_` o `sk_live_`)

4. **Configurar OAuth Providers (Opcional pero Recomendado)**
   - Ve a "User & Authentication" > "Social Connections"
   - Habilita "Google" para permitir login con Google
   - Configura las credenciales de Google OAuth si es necesario

5. **Configurar URLs de Redirección**
   - En "Paths", configura:
     - Sign-in URL: `/sign-in`
     - Sign-up URL: `/sign-up`
     - After sign-in URL: `/`
     - After sign-up URL: `/`

## Funcionalidades Implementadas

### Soft Gate Strategy
- Los usuarios pueden responder las primeras **3 preguntas gratis** sin registro
- Al llegar a la **pregunta 4 (índice 3)**, se muestra un modal de autenticación
- El usuario debe registrarse o iniciar sesión para continuar

### Componentes Implementados

1. **AuthModal** (`app/components/AuthModal.jsx`)
   - Modal de registro con opción destacada de Google
   - Opción secundaria de Email
   - Se cierra automáticamente al autenticarse

2. **Quiz Actualizado** (`app/components/Quiz.js`)
   - Detecta cuando el usuario llega a la pregunta 4
   - Muestra el modal de autenticación si no está logueado
   - Permite continuar después de autenticarse

3. **Navbar Actualizado** (`app/page.js`)
   - Muestra botón "Login" si el usuario no está autenticado
   - Muestra `UserButton` (avatar) si el usuario está autenticado

4. **Middleware** (`middleware.js`)
   - Protege rutas excepto `/`, `/pricing`, `/es`, `/es/pricing`
   - Mantiene la lógica de detección de idioma existente

## Próximos Pasos (Opcional)

1. **Personalizar el diseño del modal de Clerk**
   - Ve a "Customization" en el dashboard de Clerk
   - Personaliza colores, logos, y textos

2. **Configurar webhooks** (si necesitas sincronizar datos)
   - Ve a "Webhooks" en el dashboard
   - Configura endpoints para recibir eventos de usuario

3. **Agregar más proveedores OAuth**
   - Facebook, GitHub, etc.
   - Configura en "Social Connections"

## Notas Importantes

- **Modo de desarrollo**: Usa claves que empiecen con `pk_test_` y `sk_test_`
- **Modo de producción**: Usa claves que empiecen con `pk_live_` y `sk_live_`
- Las claves de prueba son seguras para desarrollo pero no para producción
- Nunca commitees el archivo `.env.local` al repositorio




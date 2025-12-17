# Configuración de Email Marketing con Resend y Supabase

Esta guía te ayudará a configurar el sistema de captura de emails y envío de correos de bienvenida.

## Prerequisitos

1. Cuenta en Clerk (ya configurada)
2. Cuenta en Supabase (gratuita)
3. Cuenta en Resend (gratuita)

## Paso 1: Configurar Supabase

1. **Crear cuenta y proyecto**
   - Ve a https://supabase.com y crea una cuenta
   - Crea un nuevo proyecto
   - Anota el nombre del proyecto y la región

2. **Crear las tablas**
   - En el dashboard de Supabase, ve a "SQL Editor"
   - Copia y pega el contenido de `lib/db/schema.sql`
   - Ejecuta el SQL para crear las tablas

3. **Obtener credenciales**
   - Ve a "Project Settings" > "API"
   - Copia la "Project URL" (será tu `SUPABASE_URL`)
   - Copia la "anon public" key (será tu `SUPABASE_ANON_KEY`)

## Paso 2: Configurar Resend

1. **Crear cuenta**
   - Ve a https://resend.com y crea una cuenta
   - El plan gratuito incluye 3,000 emails/mes

2. **Verificar dominio (Opcional para desarrollo)**
   - Para desarrollo, puedes usar el dominio de prueba: `onboarding@resend.dev`
   - Para producción, necesitarás verificar tu dominio
   - Ve a "Domains" en el dashboard y sigue las instrucciones

3. **Obtener API Key**
   - Ve a "API Keys" en el dashboard
   - Crea una nueva API key
   - Copia la key (será tu `RESEND_API_KEY`)

4. **Configurar email remitente**
   - Si usas dominio verificado, usa: `noreply@tudominio.com`
   - Si usas dominio de prueba, usa: `onboarding@resend.dev`

## Paso 3: Configurar Variables de Entorno

Agrega las siguientes variables a tu archivo `.env.local`:

```env
# Supabase
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_ANON_KEY=tu-anon-key-aqui

# Resend
RESEND_API_KEY=re_tu-api-key-aqui
RESEND_FROM_EMAIL=onboarding@resend.dev

# Clerk Webhook (se obtiene al configurar el webhook)
WEBHOOK_SECRET=whsec_tu-secret-aqui

# URL del sitio (para links en emails)
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## Paso 4: Configurar Webhook en Clerk

1. **Obtener URL del webhook**
   - En desarrollo local: usa ngrok o similar para exponer tu servidor
   - En producción: usa `https://tudominio.com/api/webhooks/clerk`

2. **Configurar en Clerk Dashboard**
   - Ve a tu dashboard de Clerk
   - Navega a "Webhooks" en el menú lateral
   - Haz clic en "Add Endpoint"
   - Ingresa la URL del webhook
   - Selecciona el evento: `user.created` (y opcionalmente `user.updated`)
   - Haz clic en "Create"
   - Copia el "Signing Secret" y agrégalo a `.env.local` como `WEBHOOK_SECRET`

## Paso 5: Probar la Integración

1. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

2. **Crear un usuario de prueba**
   - Ve a tu aplicación
   - Regístrate con un email de prueba
   - Verifica que:
     - El usuario se guarde en Supabase (revisa la tabla `users`)
     - Recibas el email de bienvenida
     - El log se registre en la tabla `email_log`

3. **Verificar en Supabase**
   - Ve al dashboard de Supabase
   - Navega a "Table Editor"
   - Revisa las tablas `users` y `email_log`

## Uso de la API de Emails

Puedes enviar emails personalizados usando el endpoint `/api/emails/send`:

```javascript
// Ejemplo: Enviar recordatorio de quiz
const response = await fetch('/api/emails/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    emailType: 'quiz_reminder',
  }),
});

// Ejemplo: Enviar email personalizado
const response = await fetch('/api/emails/send', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    emailType: 'custom',
    subject: 'Asunto personalizado',
    html: '<h1>Contenido HTML</h1>',
  }),
});
```

## Estructura de Base de Datos

### Tabla `users`
- Almacena información básica de usuarios sincronizados desde Clerk
- Se actualiza automáticamente cuando un usuario se registra

### Tabla `quiz_progress`
- Almacena el progreso del quiz de cada usuario
- Se puede actualizar cuando el usuario avanza en el quiz

### Tabla `email_log`
- Registra todos los emails enviados
- Útil para auditoría y evitar duplicados

## Troubleshooting

### El webhook no se ejecuta
- Verifica que `WEBHOOK_SECRET` esté correctamente configurado
- Verifica que la URL del webhook sea accesible públicamente
- Revisa los logs del servidor para ver errores

### Los emails no se envían
- Verifica que `RESEND_API_KEY` sea correcta
- Verifica que `RESEND_FROM_EMAIL` esté configurado
- Revisa la tabla `email_log` para ver el estado del envío

### Error al guardar en Supabase
- Verifica que `SUPABASE_URL` y `SUPABASE_ANON_KEY` sean correctos
- Verifica que las tablas estén creadas correctamente
- Revisa los logs de Supabase en el dashboard

## Próximos Pasos

- Personalizar las plantillas de email en `lib/emails/templates.js`
- Implementar lógica para guardar progreso del quiz en `quiz_progress`
- Crear campañas de email automatizadas (ej: recordatorios para usuarios inactivos)
- Integrar con servicios de analytics para trackear aperturas y clicks


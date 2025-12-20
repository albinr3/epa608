# Configuración de Lemon Squeezy - Guía de Integración

Esta guía te ayudará a configurar Lemon Squeezy para procesar pagos en tu aplicación.

## Prerequisitos

1. Cuenta en Lemon Squeezy (https://lemonsqueezy.com)
2. Cuenta en Clerk (ya configurada)
3. Cuenta en Supabase (ya configurada)

## Paso 1: Configurar Lemon Squeezy

1. **Crear cuenta y tienda**
   - Ve a https://lemonsqueezy.com y crea una cuenta
   - Crea una nueva tienda si aún no tienes una
   - Anota el Store ID (lo encontrarás en Settings > Store)

2. **Crear producto**
   - Ve a "Products" en el dashboard
   - Haz clic en "New Product"
   - Configura:
     - Name: "EPA 608 Practice Test - Lifetime Access"
     - Description: "Unlimited access to 300+ real exam questions with detailed explanations"
     - Price: $9.99 (o el precio que desees)
     - Product Type: "Digital Download" o "Standard"
   - Guarda el producto y anota el Product ID y Variant ID

3. **Obtener API Key**
   - Ve a "Settings" > "API" en el dashboard
   - Haz clic en "Create API Key"
   - Asigna un nombre (ej: "HVAC Prep API")
   - Copia la API key (solo se muestra una vez)
   - Esta será tu `LEMONSQUEEZY_API_KEY`

4. **Configurar Webhook**
   - Ve a "Settings" > "Webhooks" en el dashboard
   - Haz clic en "Create Webhook"
   - URL del webhook:
     - Desarrollo: Usa ngrok o similar para exponer tu servidor local
       - Ejemplo: `https://tu-ngrok-url.ngrok.io/api/webhooks/lemon-squeezy`
     - Producción: `https://tudominio.com/api/webhooks/lemon-squeezy`
   - Selecciona los siguientes eventos:
     - `order_created`
     - `subscription_created` (si usas suscripciones)
     - `subscription_payment_success` (si usas suscripciones)
   - Haz clic en "Create Webhook"
   - Copia el "Signing Secret" y guárdalo como `LEMONSQUEEZY_WEBHOOK_SECRET`

## Paso 2: Configurar Variables de Entorno

Agrega las siguientes variables a tu archivo `.env.local`:

```env
# Lemon Squeezy
LEMONSQUEEZY_API_KEY=tu-api-key-aqui
LEMONSQUEEZY_STORE_ID=tu-store-id-aqui
LEMONSQUEEZY_VARIANT_ID=tu-variant-id-aqui
LEMONSQUEEZY_WEBHOOK_SECRET=tu-webhook-secret-aqui

# URL del sitio (debe estar configurada)
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## Paso 3: Instalar Dependencias

Las dependencias ya están instaladas en `package.json`. Si necesitas reinstalarlas:

```bash
npm install
```

## Paso 4: Probar la Integración

1. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

2. **Probar el checkout**
   - Ve a `/pricing` en tu aplicación
   - Asegúrate de estar autenticado (inicia sesión si es necesario)
   - Haz clic en "Get Instant Access"
   - Debería abrirse el checkout overlay de Lemon Squeezy

3. **Probar con tarjeta de prueba**
   - En modo test, usa la tarjeta: `4242 4242 4242 4242`
   - Fecha de expiración: cualquier fecha futura
   - CVC: cualquier 3 dígitos
   - ZIP: cualquier código postal

4. **Verificar webhook**
   - Después de completar un pago de prueba, verifica los logs del servidor
   - Deberías ver: "Lemon Squeezy webhook received: order_created"
   - Verifica en Supabase que el usuario tenga `is_premium = true`

## Estructura de Archivos

Los siguientes archivos fueron creados/modificados:

1. **`package.json`** - Agregada dependencia `@lemonsqueezy/lemonsqueezy.js`
2. **`lib/db/users.js`** - Agregada función `updateUserPremiumStatus`
3. **`app/api/checkout/route.js`** - Endpoint para crear checkout sessions
4. **`app/api/webhooks/lemon-squeezy/route.js`** - Handler para webhooks
5. **`app/components/PricingSection.jsx`** - Integración del checkout overlay
6. **`app/success/page.js`** - Página de confirmación después del pago

## Flujo de Pago

1. Usuario hace clic en "Get Instant Access" en `/pricing`
2. Se verifica que el usuario esté autenticado
3. Se crea un checkout session en Lemon Squeezy via `/api/checkout`
4. Se abre el checkout overlay de Lemon Squeezy
5. Usuario completa el pago
6. Lemon Squeezy envía webhook a `/api/webhooks/lemon-squeezy`
7. El webhook actualiza `is_premium = true` en Supabase
8. Usuario es redirigido a `/success` (opcional)

## Troubleshooting

### El checkout no se abre
- Verifica que el script de Lemon Squeezy esté cargado (revisa la consola del navegador)
- Verifica que las variables de entorno estén configuradas correctamente
- Revisa los logs del servidor para errores

### El webhook no actualiza el estado premium
- Verifica que el webhook esté configurado correctamente en Lemon Squeezy
- Verifica que `LEMONSQUEEZY_WEBHOOK_SECRET` esté configurado
- Revisa los logs del servidor para errores de verificación de firma
- Verifica que el usuario exista en la base de datos

### Error "User not found" en el webhook
- El webhook intenta encontrar al usuario por `clerk_id` (del custom data) o por email
- Si el usuario no existe, se registra un error pero se retorna 200 para evitar reintentos
- El usuario se actualizará cuando se sincronice con Clerk

## Notas Importantes

- El checkout usa `customPrice: 999` (centavos) para establecer el precio de $9.99
- Si quieres cambiar el precio, modifica `customPrice` en `app/api/checkout/route.js`
- El webhook verifica la firma usando HMAC SHA256
- Los usuarios deben estar autenticados para crear un checkout
- Si un usuario ya es premium, no puede crear otro checkout


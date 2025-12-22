import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { createCheckout, lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js';
import { ensureUserExists } from '@/lib/db/ensureUserExists';

/**
 * ⚠️ Anti-regresión (bug real):
 * - Con `@lemonsqueezy/lemonsqueezy.js` v2 el SDK es *funcional* (tree-shakeable) y se configura con `lemonSqueezySetup()`.
 * - El enfoque antiguo `new LemonSqueezy(apiKey).checkouts.create(...)` NO existe en v2 (`checkouts` es undefined) y rompe con:
 *   "Cannot read properties of undefined (reading 'create')".
 * - Por eso aquí usamos `createCheckout(...)` (función) y NO un cliente con `.checkouts.create`.
 */
lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

/**
 * POST /api/checkout
 * Crea un checkout session en Lemon Squeezy para el usuario autenticado
 */
export async function POST(req) {
  try {
    // Verificar autenticación
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in to continue.' },
        { status: 401 }
      );
    }

    // Verificar variables de entorno
    if (!process.env.LEMONSQUEEZY_API_KEY || !process.env.LEMONSQUEEZY_STORE_ID || !process.env.LEMONSQUEEZY_VARIANT_ID) {
      console.error('Missing Lemon Squeezy environment variables');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    // Asegurar que el usuario existe en la BD
    const dbUser = await ensureUserExists(userId);
    
    // Si ya es premium, retornar error
    if (dbUser.is_premium) {
      return NextResponse.json(
        { error: 'You already have premium access' },
        { status: 400 }
      );
    }

    // Obtener datos del usuario de Clerk
    const user = await currentUser();
    const email = user.primaryEmailAddress?.emailAddress;
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';

    // Obtener la URL base del sitio
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const successUrl = `${baseUrl}/success?checkout=success`;
    const customPrice = 999; // $9.99 en centavos

    // Crear checkout session en Lemon Squeezy (SDK v2, API funcional)
    const { data: checkout, error: checkoutError, statusCode } = await createCheckout(
      process.env.LEMONSQUEEZY_STORE_ID,
      process.env.LEMONSQUEEZY_VARIANT_ID,
      {
        // Nota: `successUrl` está disponible si luego queremos incorporarlo (según capacidades del checkout de Lemon Squeezy).
        customPrice: customPrice,
        productOptions: {
          name: 'EPA 608 Practice Test - Lifetime Access',
          description: 'Unlimited access to 300+ real exam questions with detailed explanations',
        },
        checkoutOptions: {
          embed: true, // Para usar overlay
          media: false,
          logo: false,
          desc: true,
          discount: false,
          dark: false,
          subscriptionPreview: false,
        },
        checkoutData: {
          email: email,
          name: `${firstName} ${lastName}`.trim() || email,
          custom: {
            clerk_id: userId, // Para identificar al usuario en el webhook
          },
        },
        preview: false,
        testMode: process.env.NEXT_PUBLIC_SITE_URL?.includes('localhost') || false,
        expiresAt: null,
      }
    );

    if (checkoutError || !checkout?.data?.attributes?.url) {
      throw new Error(checkoutError?.message || 'Failed to create checkout session');
    }

    // Retornar la URL del checkout
    return NextResponse.json({
      success: true,
      checkoutUrl: checkout.data.attributes.url,
      embedUrl: checkout.data.attributes.url, // Para overlay
    });
  } catch (error) {
    console.error('Error creating checkout:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to create checkout session',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


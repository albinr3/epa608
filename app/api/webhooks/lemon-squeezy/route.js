import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getUserByEmail, getUserByClerkId, updateUserPremiumStatus } from '@/lib/db/users';
import { ensureUserExists } from '@/lib/db/ensureUserExists';

/**
 * POST /api/webhooks/lemon-squeezy
 * Procesa webhooks de Lemon Squeezy para actualizar estado premium de usuarios
 */
export async function POST(req) {
  const WEBHOOK_SECRET = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error('LEMONSQUEEZY_WEBHOOK_SECRET is not set');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  try {
    // Obtener headers
    const headerPayload = await headers();
    const signature = headerPayload.get('x-signature');

    if (!signature) {
      return new Response('Missing signature header', { status: 400 });
    }

    // Obtener el body como texto para verificar la firma
    const body = await req.text();
    
    // Verificar la firma del webhook
    const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
    const digest = hmac.update(body).digest('hex');
    const expectedSignature = Buffer.from(digest, 'hex').toString('base64');

    if (signature !== expectedSignature) {
      console.error('Invalid webhook signature');
      return new Response('Invalid signature', { status: 401 });
    }

    // Parsear el body como JSON
    const payload = JSON.parse(body);
    const eventName = payload.meta?.event_name || payload.event_name;

    console.log('Lemon Squeezy webhook received:', eventName, JSON.stringify(payload, null, 2));

    // Procesar eventos relevantes
    if (eventName === 'order_created' || eventName === 'subscription_created' || eventName === 'subscription_payment_success') {
      // La estructura del payload puede variar, intentar múltiples rutas
      const orderData = payload.data?.attributes || payload.data?.data?.attributes || payload.data;
      const included = payload.included || [];
      
      // Buscar customer en included si está disponible
      const customer = included.find(item => item.type === 'customers')?.attributes;
      const customerEmail = customer?.email || orderData?.customer_email || orderData?.user_email;
      
      // Buscar custom data en checkout_data o custom
      const checkoutData = orderData?.checkout_data || {};
      const customData = checkoutData.custom || orderData?.custom || {};
      const clerkId = customData.clerk_id;

      let user = null;

      // Intentar encontrar usuario por clerk_id primero (más confiable)
      if (clerkId) {
        user = await getUserByClerkId(clerkId);
        if (!user) {
          // Si no existe, intentar crearlo
          try {
            await ensureUserExists(clerkId);
            user = await getUserByClerkId(clerkId);
          } catch (error) {
            console.error('Error ensuring user exists:', error);
          }
        }
      }

      // Si no se encontró por clerk_id, intentar por email
      if (!user && customerEmail) {
        user = await getUserByEmail(customerEmail);
      }

      if (!user) {
        console.error('User not found for webhook:', { clerkId, customerEmail });
        // Retornar 200 para que Lemon Squeezy no reintente, pero loguear el error
        return NextResponse.json({ 
          received: true, 
          message: 'User not found - will be processed when user syncs' 
        });
      }

      // Actualizar estado premium
      try {
        await updateUserPremiumStatus(user.id, false);
        console.log('Premium status updated for user:', user.id);
      } catch (error) {
        console.error('Error updating premium status:', error);
        return NextResponse.json(
          { error: 'Failed to update premium status' },
          { status: 500 }
        );
      }

      return NextResponse.json({ 
        received: true, 
        message: 'Premium status updated successfully',
        userId: user.id 
      });
    }

    // Para otros eventos, solo confirmar recepción
    return NextResponse.json({ 
      received: true, 
      message: 'Webhook received but no action needed',
      event: eventName 
    });

  } catch (error) {
    console.error('Error processing Lemon Squeezy webhook:', error);
    return NextResponse.json(
      { 
        error: error.message || 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}


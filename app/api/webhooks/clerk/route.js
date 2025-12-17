import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { upsertUser, markWelcomeEmailSent } from '@/lib/db/users';
import { sendWelcomeEmail } from '@/lib/emails/sendWelcomeEmail';

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response('Error: WEBHOOK_SECRET is not set', { status: 500 });
  }

  // Obtener headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // Si no hay headers, retornar error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing svix headers', { status: 400 });
  }

  // Obtener el body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Crear una nueva instancia de Svix
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt;

  // Verificar el payload
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error verifying webhook', { status: 400 });
  }

  // Obtener el tipo de evento
  const eventType = evt.type;
  const { id, email_addresses, first_name, last_name } = evt.data;

  // Procesar evento user.created
  if (eventType === 'user.created') {
    try {
      // Obtener el email principal
      const primaryEmail = email_addresses?.find(
        (email) => email.id === evt.data.primary_email_address_id
      ) || email_addresses?.[0];

      if (!primaryEmail?.email_address) {
        console.error('No email address found for user:', id);
        return new Response('Error: No email address found', { status: 400 });
      }

      // Guardar usuario en la base de datos
      const user = await upsertUser({
        clerkId: id,
        email: primaryEmail.email_address,
        firstName: first_name || null,
        lastName: last_name || null,
      });

      // Enviar email de bienvenida
      try {
        await sendWelcomeEmail({
          userId: user.id,
          email: primaryEmail.email_address,
          firstName: first_name || null,
        });

        // Marcar que el email de bienvenida fue enviado
        await markWelcomeEmailSent(user.id);

        console.log('Welcome email sent to:', primaryEmail.email_address);
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError);
        // No fallar el webhook si el email falla, solo loguear el error
      }

      return new Response('User created and welcome email sent', { status: 200 });
    } catch (error) {
      console.error('Error processing user.created event:', error);
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }

  // Procesar evento user.updated (opcional, para mantener datos actualizados)
  if (eventType === 'user.updated') {
    try {
      const primaryEmail = email_addresses?.find(
        (email) => email.id === evt.data.primary_email_address_id
      ) || email_addresses?.[0];

      if (primaryEmail?.email_address) {
        await upsertUser({
          clerkId: id,
          email: primaryEmail.email_address,
          firstName: first_name || null,
          lastName: last_name || null,
        });
      }

      return new Response('User updated', { status: 200 });
    } catch (error) {
      console.error('Error processing user.updated event:', error);
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  }

  // Si es otro tipo de evento, solo confirmar recepción
  return new Response('Event received', { status: 200 });
}


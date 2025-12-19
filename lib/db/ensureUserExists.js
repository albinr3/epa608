/**
 * Server-only helper para asegurar que un usuario existe en public.users
 * Si no existe, lo crea usando datos de Clerk
 * 
 * @param {string} clerkId - ID de Clerk del usuario
 * @returns {Promise<Object>} Usuario de la base de datos
 * @throws {Error} Si no se puede obtener email del usuario o crear en BD
 */

import { clerkClient } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Faltan variables de entorno de Supabase');
}

// Cliente con service role para bypass RLS
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function ensureUserExists(clerkId) {
  // 1. Intentar obtener usuario existente usando supabaseAdmin (service role)
  // para evitar problemas con RLS
  const { data: existingUser, error: fetchError } = await supabaseAdmin
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') {
    // Error que no sea "no encontrado"
    throw new Error(`Error getting user: ${fetchError.message}`);
  }

  if (existingUser) {
    return existingUser;
  }

  // 2. Si no existe, obtener datos de Clerk
  let clerkUser;
  try {
    // Intentar usar clerkClient primero
    if (clerkClient && clerkClient.users) {
      clerkUser = await clerkClient.users.getUser(clerkId);
    } else {
      // Fallback: usar API REST de Clerk si clerkClient no está disponible
      const clerkSecretKey = process.env.CLERK_SECRET_KEY;
      if (!clerkSecretKey) {
        throw new Error('CLERK_SECRET_KEY is not set in environment variables. clerkClient is also not available.');
      }
      
      const response = await fetch(`https://api.clerk.com/v1/users/${clerkId}`, {
        headers: {
          'Authorization': `Bearer ${clerkSecretKey}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Clerk API error: ${response.status} ${response.statusText} - ${errorText}`);
      }
      
      clerkUser = await response.json();
    }
  } catch (error) {
    throw new Error(`Error fetching user from Clerk: ${error.message}`);
  }

  if (!clerkUser) {
    throw new Error('User not found in Clerk');
  }

  // 3. Obtener email (usar primaryEmailAddress primero, luego el primero disponible)
  // La API REST de Clerk usa email_addresses (snake_case), mientras que clerkClient usa emailAddresses (camelCase)
  const emailAddresses = clerkUser.email_addresses || clerkUser.emailAddresses || [];
  const primaryEmailId = clerkUser.primary_email_address_id || clerkUser.primaryEmailAddressId;
  
  const primaryEmail = primaryEmailId 
    ? emailAddresses.find(e => e.id === primaryEmailId)?.email_address || emailAddresses.find(e => e.id === primaryEmailId)?.emailAddress
    : null;
  
  const email = primaryEmail || emailAddresses[0]?.email_address || emailAddresses[0]?.emailAddress || null;

  if (!email) {
    throw new Error('User does not have an email address. Email is required to create user in database.');
  }

  // 4. Obtener nombre y apellido
  const firstName = clerkUser.firstName || null;
  const lastName = clerkUser.lastName || null;

  // 5. Crear usuario en BD usando service role
  const { data: newUser, error: upsertError } = await supabaseAdmin
    .from('users')
    .upsert(
      {
        clerk_id: clerkId,
        email: email,
        first_name: firstName,
        last_name: lastName,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'clerk_id',
        ignoreDuplicates: false,
      }
    )
    .select()
    .single();

  if (upsertError) {
    // Si hay error de duplicado en email, intentar actualizar el usuario existente
    if (upsertError.code === '23505' && (upsertError.details?.includes('email') || upsertError.message?.includes('email'))) {
      // Buscar el usuario existente por email
      const { data: existingUserByEmail, error: fetchError } = await supabaseAdmin
        .from('users')
        .select('*')
        .eq('email', email)
        .single();

      if (fetchError) {
        throw new Error(`Error upserting user: ${upsertError.message}`);
      }

      // Actualizar el usuario existente con el nuevo clerk_id
      const { data: updatedUser, error: updateError } = await supabaseAdmin
        .from('users')
        .update({
          clerk_id: clerkId,
          first_name: firstName,
          last_name: lastName,
          updated_at: new Date().toISOString(),
        })
        .eq('email', email)
        .select()
        .single();

      if (updateError) {
        throw new Error(`Error upserting user: ${updateError.message}`);
      }

      return updatedUser;
    }

    throw new Error(`Error creating user in database: ${upsertError.message}`);
  }

  return newUser;
}


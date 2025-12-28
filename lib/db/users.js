import { supabase } from '../supabase';

/**
 * Crea o actualiza un usuario en la base de datos
 * @param {Object} userData - Datos del usuario
 * @param {string} userData.clerkId - ID de Clerk
 * @param {string} userData.email - Email del usuario
 * @param {string} [userData.firstName] - Nombre
 * @param {string} [userData.lastName] - Apellido
 * @returns {Promise<Object>} Usuario creado/actualizado
 */
export async function upsertUser(userData) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const firstNameToSave = userData.firstName || null;
  const lastNameToSave = userData.lastName || null;
  
  // CRITICAL FIX: Verificar si el usuario ya existe antes de hacer upsert
  // Si existe y tiene firstName/lastName, y los nuevos valores son null,
  // preservar los valores existentes para evitar sobrescribir con null
  const existingUser = await supabase
    .from('users')
    .select('first_name, last_name')
    .eq('clerk_id', userData.clerkId)
    .single();
  
  let finalFirstName = firstNameToSave;
  let finalLastName = lastNameToSave;
  
  // Si el usuario existe y tiene datos, preservarlos si los nuevos son null o vacíos
  // CRITICAL: Esto previene que el webhook sobrescriba valores válidos con null
  if (existingUser.data && !existingUser.error) {
    // Preservar firstName si el nuevo valor es null/vacío y el existente tiene valor
    if ((!finalFirstName || finalFirstName.trim() === '') && existingUser.data.first_name) {
      finalFirstName = existingUser.data.first_name;
    }
    // Preservar lastName si el nuevo valor es null/vacío y el existente tiene valor
    if ((!finalLastName || finalLastName.trim() === '') && existingUser.data.last_name) {
      finalLastName = existingUser.data.last_name;
    }
  }
  
  // Intentar upsert primero por clerk_id
  let { data, error } = await supabase
    .from('users')
    .upsert(
      {
        clerk_id: userData.clerkId,
        email: userData.email,
        first_name: finalFirstName,
        last_name: finalLastName,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'clerk_id',
        ignoreDuplicates: false,
      }
    )
    .select()
    .single();

  // Si hay un error de duplicado en email, intentar actualizar el usuario existente
  if (error && error.code === '23505' && (error.details?.includes('email') || error.message?.includes('email'))) {
    // Buscar el usuario existente por email
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', userData.email)
      .single();

    if (fetchError) {
      throw new Error(`Error upserting user: ${error.message}`);
    }

    // Actualizar el usuario existente con el nuevo clerk_id
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        clerk_id: userData.clerkId,
        first_name: userData.firstName || null,
        last_name: userData.lastName || null,
        updated_at: new Date().toISOString(),
      })
      .eq('email', userData.email)
      .select()
      .single();

    if (updateError) {
      throw new Error(`Error upserting user: ${updateError.message}`);
    }

    return updatedUser;
  }

  if (error) {
    throw new Error(`Error upserting user: ${error.message}`);
  }

  return data;
}

/**
 * Obtiene un usuario por su Clerk ID
 * @param {string} clerkId - ID de Clerk
 * @returns {Promise<Object|null>} Usuario o null si no existe
 */
export async function getUserByClerkId(clerkId) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('clerk_id', clerkId)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No se encontró el usuario
      return null;
    }
    throw new Error(`Error getting user: ${error.message}`);
  }

  return data;
}

/**
 * Obtiene un usuario por su email
 * @param {string} email - Email del usuario
 * @returns {Promise<Object|null>} Usuario o null si no existe
 */
export async function getUserByEmail(email) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    throw new Error(`Error getting user by email: ${error.message}`);
  }

  return data;
}

/**
 * Marca que el email de bienvenida fue enviado
 * @param {string} userId - ID del usuario (UUID)
 * @returns {Promise<void>}
 */
export async function markWelcomeEmailSent(userId) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const { error } = await supabase
    .from('users')
    .update({ welcome_email_sent: true })
    .eq('id', userId);

  if (error) {
    throw new Error(`Error marking welcome email sent: ${error.message}`);
  }
}

/**
 * Obtiene el progreso del quiz de un usuario
 * @param {string} userId - ID del usuario (UUID)
 * @param {string} [category='ALL'] - Categoría del quiz (default: 'ALL' para compatibilidad)
 * @returns {Promise<Object|null>} Progreso o null si no existe
 */
export async function getQuizProgress(userId, category = 'ALL') {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const { data, error } = await supabase
    .from('quiz_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('category', category)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No se encontró el progreso
      return null;
    }
    throw new Error(`Error getting quiz progress: ${error.message}`);
  }

  return data;
}

/**
 * Guarda o actualiza el progreso del quiz
 * @param {Object} progressData - Datos del progreso
 * @param {string} progressData.userId - ID del usuario (UUID)
 * @param {string} [progressData.category='ALL'] - Categoría del quiz (default: 'ALL' para compatibilidad)
 * @param {number} progressData.currentQuestionIndex - Índice de pregunta actual
 * @param {number} progressData.correctAnswers - Respuestas correctas
 * @param {number} progressData.totalAnswered - Total de preguntas respondidas
 * @returns {Promise<Object>} Progreso guardado
 */
export async function saveQuizProgress(progressData) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const category = progressData.category || 'ALL';
  
  const { data, error } = await supabase
    .from('quiz_progress')
    .upsert(
      {
        user_id: progressData.userId,
        category: category,
        current_question_index: progressData.currentQuestionIndex,
        correct_answers: progressData.correctAnswers,
        total_answered: progressData.totalAnswered,
        last_updated: new Date().toISOString(),
      },
      {
        onConflict: 'user_id,category',
        ignoreDuplicates: false,
      }
    )
    .select()
    .single();

  if (error) {
    throw new Error(`Error saving quiz progress: ${error.message}`);
  }

  return data;
}

/**
 * Registra un email enviado en el log
 * @param {Object} logData - Datos del log
 * @param {string} logData.userId - ID del usuario (UUID)
 * @param {string} logData.emailType - Tipo de email ('welcome', 'quiz_reminder', etc.)
 * @param {string} logData.status - Estado ('sent', 'failed')
 * @param {string} [logData.errorMessage] - Mensaje de error si falló
 * @returns {Promise<Object>} Log creado
 */
export async function logEmailSent(logData) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }
  
  const { data, error } = await supabase
    .from('email_log')
    .insert({
      user_id: logData.userId,
      email_type: logData.emailType,
      status: logData.status,
      error_message: logData.errorMessage || null,
    })
    .select()
    .single();

  if (error) {
    throw new Error(`Error logging email: ${error.message}`);
  }

  return data;
}

/**
 * Actualiza el estado premium de un usuario
 * @param {string} userId - ID del usuario (UUID) o Clerk ID
 * @param {boolean} [isClerkId=false] - Si userId es un Clerk ID en lugar de UUID
 * @returns {Promise<Object>} Usuario actualizado
 */
export async function updateUserPremiumStatus(userId, isClerkId = false) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.');
  }

  const updateData = {
    is_premium: true,
    premium_granted_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  let query = supabase.from('users').update(updateData);

  if (isClerkId) {
    query = query.eq('clerk_id', userId);
  } else {
    query = query.eq('id', userId);
  }

  const { data, error } = await query.select().single();

  if (error) {
    if (error.code === 'PGRST116') {
      throw new Error(`User not found: ${userId}`);
    }
    throw new Error(`Error updating premium status: ${error.message}`);
  }

  return data;
}


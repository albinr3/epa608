import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getUserByClerkId, saveQuizProgress, getQuizProgress } from '@/lib/db/users';

/**
 * Endpoint para obtener el progreso del quiz
 * GET /api/quiz/progress
 */
export async function GET(req) {
  let userId = null;
  try {
    // Verificar autenticación
    const authResult = await auth();
    userId = authResult.userId;

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Obtener el usuario de la base de datos usando el Clerk ID
    const dbUser = await getUserByClerkId(userId);

    if (!dbUser) {
      return NextResponse.json(
        { error: 'User not found in database. Please sync your account first.' },
        { status: 404 }
      );
    }

    // Obtener category de query params (default: 'ALL' para compatibilidad)
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'ALL';

    // Obtener el progreso
    const progress = await getQuizProgress(dbUser.id, category);

    return NextResponse.json({
      success: true,
      progress: progress || null,
    });
  } catch (error) {
    console.error('Error getting quiz progress:', error);
    
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Endpoint para guardar el progreso del quiz
 * POST /api/quiz/progress
 * Body: { currentQuestionIndex, correctAnswers, totalAnswered }
 */
export async function POST(req) {
  let userId = null;
  try {
    // Verificar autenticación
    const authResult = await auth();
    userId = authResult.userId;

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Obtener datos del body
    const body = await req.json();
    const { currentQuestionIndex, correctAnswers, totalAnswered, category } = body;


    // Validar datos
    if (typeof currentQuestionIndex !== 'number' || 
        typeof correctAnswers !== 'number' || 
        typeof totalAnswered !== 'number') {
      return NextResponse.json(
        { error: 'Invalid progress data' },
        { status: 400 }
      );
    }

    // Obtener el usuario de la base de datos usando el Clerk ID
    const dbUser = await getUserByClerkId(userId);

    if (!dbUser) {
      return NextResponse.json(
        { error: 'User not found in database. Please sync your account first.' },
        { status: 404 }
      );
    }

    // Usar category del body o default 'ALL' para compatibilidad
    const progressCategory = category || 'ALL';

    // Leer el progreso actual para evitar regresiones
    const existing = await getQuizProgress(dbUser.id, progressCategory);

    // Calcular valores "seguros" que nunca disminuyan
    // Si el usuario tiene 8 en DB, ninguna llamada posterior puede bajarlo a 3
    // CRITICAL FIX: Si hay inconsistencia (índice > respuestas + 1), usar el índice basado en respuestas
    const existingIndex = existing?.current_question_index ?? 0;
    const existingTotal = existing?.total_answered ?? 0;
    
    // Detectar inconsistencia: si el índice del DB es mucho mayor que las respuestas, probablemente está mal
    // (viene de una sesión anónima anterior)
    let safeIndex;
    if (existingIndex > existingTotal + 1 && currentQuestionIndex !== undefined && currentQuestionIndex !== null) {
      // El índice del DB parece incorrecto, usar el índice del cliente (que viene corregido del frontend)
      safeIndex = Math.max(currentQuestionIndex, 0);
    } else {
      // Usar Math.max normal para evitar regresiones
      safeIndex = Math.max(existingIndex, currentQuestionIndex ?? 0);
    }
    
    const safeTotal = Math.max(
      existingTotal,
      totalAnswered ?? 0
    );
    const safeCorrect = Math.max(
      existing?.correct_answers ?? 0,
      correctAnswers ?? 0
    );

    // Guardar el progreso usando los valores seguros
    const progress = await saveQuizProgress({
      userId: dbUser.id,
      category: progressCategory,
      currentQuestionIndex: safeIndex,
      correctAnswers: safeCorrect,
      totalAnswered: safeTotal,
    });


    return NextResponse.json({
      success: true,
      progress,
    });
  } catch (error) {
    console.error('Error saving quiz progress:', error);
    
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}


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

    // Obtener el progreso
    const progress = await getQuizProgress(dbUser.id);

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
    const { currentQuestionIndex, correctAnswers, totalAnswered } = body;

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

    // Guardar el progreso
    const progress = await saveQuizProgress({
      userId: dbUser.id,
      currentQuestionIndex,
      correctAnswers,
      totalAnswered,
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


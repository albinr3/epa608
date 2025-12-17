import { auth, currentUser } from '@clerk/nextjs/server';
import { sendEmail } from '@/lib/emails/sendEmail';
import { getUserByClerkId } from '@/lib/db/users';
import { NextResponse } from 'next/server';

/**
 * API endpoint para enviar emails manualmente
 * Requiere autenticación y solo puede enviar emails al usuario autenticado
 * 
 * POST /api/emails/send
 * Body: {
 *   emailType: 'quiz_reminder' | 'custom',
 *   subject?: string (requerido si emailType es 'custom'),
 *   html?: string (requerido si emailType es 'custom')
 * }
 */
export async function POST(req) {
  try {
    // Verificar autenticación
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Obtener datos del usuario de Clerk
    const user = await currentUser();
    const email = user.primaryEmailAddress?.emailAddress;

    if (!email) {
      return NextResponse.json(
        { error: 'User email not found' },
        { status: 400 }
      );
    }

    // Obtener usuario de la base de datos
    const dbUser = await getUserByClerkId(userId);

    if (!dbUser) {
      return NextResponse.json(
        { error: 'User not found in database' },
        { status: 404 }
      );
    }

    // Obtener datos del body
    const body = await req.json();
    const { emailType, subject, html } = body;

    if (!emailType) {
      return NextResponse.json(
        { error: 'emailType is required' },
        { status: 400 }
      );
    }

    // Validar que el emailType sea válido
    const validEmailTypes = ['quiz_reminder', 'custom'];
    if (!validEmailTypes.includes(emailType)) {
      return NextResponse.json(
        { error: `Invalid emailType. Must be one of: ${validEmailTypes.join(', ')}` },
        { status: 400 }
      );
    }

    // Si es custom, validar que subject y html estén presentes
    if (emailType === 'custom') {
      if (!subject || !html) {
        return NextResponse.json(
          { error: 'subject and html are required for custom emails' },
          { status: 400 }
        );
      }
    }

    // Enviar email
    let emailSubject;
    let emailHtml;

    if (emailType === 'quiz_reminder') {
      // Aquí podrías obtener datos del quiz desde la DB
      // Por ahora, usamos valores por defecto
      const { getQuizReminderEmailTemplate } = await import('@/lib/emails/templates');
      const template = getQuizReminderEmailTemplate({
        firstName: user.firstName || null,
        questionsAnswered: 0, // TODO: Obtener de la DB
        totalQuestions: 300, // TODO: Obtener de la DB
      });
      emailSubject = template.subject;
      emailHtml = template.html;
    } else {
      emailSubject = subject;
      emailHtml = html;
    }

    const result = await sendEmail({
      userId: dbUser.id,
      to: email,
      subject: emailSubject,
      html: emailHtml,
      emailType,
    });

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}


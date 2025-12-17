import { resend } from '../resend';
import { logEmailSent } from '../db/users';

/**
 * Función genérica para enviar emails
 * @param {Object} params - Parámetros del email
 * @param {string} params.userId - ID del usuario (UUID)
 * @param {string} params.to - Email del destinatario
 * @param {string} params.subject - Asunto del email
 * @param {string} params.html - Contenido HTML del email
 * @param {string} params.emailType - Tipo de email para el log ('welcome', 'quiz_reminder', etc.)
 * @param {string} [params.from] - Email remitente (opcional, usa RESEND_FROM_EMAIL por defecto)
 * @returns {Promise<Object>} Resultado del envío
 */
export async function sendEmail({ userId, to, subject, html, emailType, from }) {
  try {
    const fromEmail = from || process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    const result = await resend.emails.send({
      from: fromEmail,
      to,
      subject,
      html,
    });

    // Registrar en el log
    await logEmailSent({
      userId,
      emailType,
      status: 'sent',
    });

    return {
      success: true,
      messageId: result.data?.id,
    };
  } catch (error) {
    // Registrar error en el log
    try {
      await logEmailSent({
        userId,
        emailType,
        status: 'failed',
        errorMessage: error.message,
      });
    } catch (logError) {
      console.error('Error logging email failure:', logError);
    }

    throw new Error(`Error sending email: ${error.message}`);
  }
}


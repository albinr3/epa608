import { resend } from '../resend';
import { getWelcomeEmailTemplate } from './templates';
import { logEmailSent } from '../db/users';

/**
 * Envía un email de bienvenida al usuario
 * @param {Object} params - Parámetros del email
 * @param {string} params.userId - ID del usuario (UUID)
 * @param {string} params.email - Email del destinatario
 * @param {string} [params.firstName] - Nombre del usuario
 * @param {string} [params.lang='es'] - Idioma del email ('es' o 'en')
 * @returns {Promise<Object>} Resultado del envío
 */
export async function sendWelcomeEmail({ userId, email, firstName, lang = 'es' }) {
  try {
    const template = getWelcomeEmailTemplate({ firstName, email, lang });
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: template.subject,
      html: template.html,
    });

    // Registrar en el log
    await logEmailSent({
      userId,
      emailType: 'welcome',
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
        emailType: 'welcome',
        status: 'failed',
        errorMessage: error.message,
      });
    } catch (logError) {
      console.error('Error logging email failure:', logError);
    }

    throw new Error(`Error sending welcome email: ${error.message}`);
  }
}


/**
 * Plantillas de emails para la aplicación
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tudominio.com';

/**
 * Template de email de bienvenida
 * @param {Object} params - Parámetros del email
 * @param {string} params.firstName - Nombre del usuario
 * @param {string} params.email - Email del usuario
 * @returns {Object} Objeto con subject y HTML del email
 */
export function getWelcomeEmailTemplate({ firstName, email }) {
  const name = firstName || 'Estudiante';
  
  return {
    subject: '¡Bienvenido a HVAC Prep! 🎉',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Bienvenido a HVAC Prep</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">¡Bienvenido a HVAC Prep!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; margin-top: 0;">Hola ${name},</p>
            
            <p>¡Gracias por registrarte en HVAC Prep! Estamos emocionados de ayudarte a prepararte para tu examen EPA 608.</p>
            
            <p>Con HVAC Prep podrás:</p>
            <ul style="line-height: 2;">
              <li>Practicar con más de 300 preguntas reales del examen</li>
              <li>Recibir explicaciones detalladas de cada respuesta</li>
              <li>Simular el examen real con modo cronometrado</li>
              <li>Rastrear tu progreso y mejorar tus resultados</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${SITE_URL}" 
                 style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Comenzar a Practicar
              </a>
            </div>
            
            <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 14px;">
              Si tienes alguna pregunta, no dudes en contactarnos. ¡Estamos aquí para ayudarte a tener éxito!
            </p>
            
            <p style="color: #666; font-size: 14px; margin-top: 20px;">
              Saludos,<br>
              El equipo de HVAC Prep
            </p>
          </div>
        </body>
      </html>
    `,
  };
}

/**
 * Template de email de recordatorio para completar el quiz
 * @param {Object} params - Parámetros del email
 * @param {string} params.firstName - Nombre del usuario
 * @param {number} params.questionsAnswered - Preguntas respondidas
 * @param {number} params.totalQuestions - Total de preguntas
 * @returns {Object} Objeto con subject y HTML del email
 */
export function getQuizReminderEmailTemplate({ firstName, questionsAnswered, totalQuestions }) {
  const name = firstName || 'Estudiante';
  const progress = Math.round((questionsAnswered / totalQuestions) * 100);
  
  return {
    subject: 'Continúa tu práctica del EPA 608 📚',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Continúa tu Práctica</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">¡No te rindas!</h1>
          </div>
          
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; margin-top: 0;">Hola ${name},</p>
            
            <p>Veo que has completado ${questionsAnswered} de ${totalQuestions} preguntas (${progress}% de progreso). ¡Estás haciendo un gran trabajo!</p>
            
            <p>Continúa donde lo dejaste y completa tu práctica para estar completamente preparado para el examen EPA 608.</p>
            
            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #667eea;">
              <p style="margin: 0; font-weight: bold;">Tu progreso:</p>
              <div style="background: #e0e0e0; border-radius: 10px; height: 20px; margin-top: 10px; overflow: hidden;">
                <div style="background: #667eea; height: 100%; width: ${progress}%; transition: width 0.3s;"></div>
              </div>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">${questionsAnswered} / ${totalQuestions} preguntas</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${SITE_URL}" 
                 style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                Continuar Práctica
              </a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Saludos,<br>
              El equipo de HVAC Prep
            </p>
          </div>
        </body>
      </html>
    `,
  };
}


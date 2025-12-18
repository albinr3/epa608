import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | EPA608Practice.org',
  description: 'Política de Privacidad para EPA608Practice.org - Plataforma de práctica para certificación EPA 608',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
          Política de Privacidad
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introducción</h2>
            <p className="leading-relaxed mb-4">
              EPA608Practice.org ("nosotros," "nuestro" o "nos") está comprometido a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando utiliza nuestro Servicio. Por favor, lea esta política de privacidad cuidadosamente. Si no está de acuerdo con los términos de esta política de privacidad, por favor no acceda al Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Información que Recopilamos</h2>
            <p className="leading-relaxed mb-4">
              Recopilamos información que usted nos proporciona directamente e información que se recopila automáticamente cuando utiliza nuestro Servicio.
            </p>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">2.1 Información que Usted Proporciona</h3>
            <p className="leading-relaxed mb-4">
              Podemos recopilar información que usted nos proporciona directamente, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Información de registro de cuenta (nombre, dirección de correo electrónico, contraseña)</li>
              <li>Información de perfil que elija proporcionar</li>
              <li>Información de pago (procesada de forma segura a través de procesadores de pago de terceros)</li>
              <li>Comunicaciones con nosotros (solicitudes de soporte, comentarios, etc.)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">2.2 Información Recopilada Automáticamente</h3>
            <p className="leading-relaxed mb-4">
              Cuando utiliza nuestro Servicio, podemos recopilar automáticamente cierta información, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Información del dispositivo (tipo de dispositivo, sistema operativo, tipo de navegador)</li>
              <li>Datos de uso (páginas visitadas, tiempo empleado, funciones utilizadas)</li>
              <li>Dirección IP y datos de ubicación</li>
              <li>Cookies y tecnologías de seguimiento similares</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cómo Utilizamos Su Información</h2>
            <p className="leading-relaxed mb-4">
              Utilizamos la información que recopilamos para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Proporcionar, mantener y mejorar nuestro Servicio</li>
              <li>Procesar sus transacciones y enviarle información relacionada</li>
              <li>Enviarle avisos técnicos, actualizaciones, alertas de seguridad y mensajes de soporte</li>
              <li>Responder a sus comentarios, preguntas y solicitudes</li>
              <li>Monitorear y analizar tendencias, uso y actividades en relación con nuestro Servicio</li>
              <li>Personalizar y mejorar su experiencia</li>
              <li>Detectar, prevenir y abordar problemas técnicos y actividad fraudulenta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Compartir y Divulgación de Información</h2>
            <p className="leading-relaxed mb-4">
              No vendemos, comercializamos ni alquilamos su información personal a terceros. Podemos compartir su información en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Proveedores de Servicios:</strong> Podemos compartir su información con proveedores de servicios de terceros que realizan servicios en nuestro nombre, como procesamiento de pagos, análisis de datos, entrega de correo electrónico, servicios de alojamiento y atención al cliente.</li>
              <li><strong>Requisitos Legales:</strong> Podemos divulgar su información si así lo requiere la ley o en respuesta a solicitudes válidas de autoridades públicas.</li>
              <li><strong>Transferencias Comerciales:</strong> Si estamos involucrados en una fusión, adquisición o venta de activos, su información puede ser transferida como parte de esa transacción.</li>
              <li><strong>Con Su Consentimiento:</strong> Podemos compartir su información con su consentimiento o a su dirección.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Seguridad de Datos</h2>
            <p className="leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por usar medios comercialmente aceptables para proteger su información personal, no podemos garantizar su seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies y Tecnologías de Seguimiento</h2>
            <p className="leading-relaxed mb-4">
              Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y mantener cierta información. Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo. Puede instruir a su navegador para que rechace todas las cookies o para que indique cuando se está enviando una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda usar algunas partes de nuestro Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Sus Derechos y Opciones</h2>
            <p className="leading-relaxed mb-4">
              Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Acceso:</strong> Puede solicitar acceso a su información personal</li>
              <li><strong>Corrección:</strong> Puede solicitar la corrección de información inexacta o incompleta</li>
              <li><strong>Eliminación:</strong> Puede solicitar la eliminación de su información personal</li>
              <li><strong>Oposición:</strong> Puede oponerse al procesamiento de su información personal</li>
              <li><strong>Portabilidad de Datos:</strong> Puede solicitar la transferencia de su información personal</li>
              <li><strong>Retirar Consentimiento:</strong> Puede retirar el consentimiento cuando dependamos del consentimiento para procesar su información</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Para ejercer estos derechos, por favor contáctenos usando la información proporcionada en la sección de Contacto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Privacidad de Menores</h2>
            <p className="leading-relaxed mb-4">
              Nuestro Servicio no está dirigido a niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si usted es un padre o tutor y cree que su hijo nos ha proporcionado información personal, por favor contáctenos para que podamos eliminar dicha información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Retención de Datos</h2>
            <p className="leading-relaxed mb-4">
              Conservamos su información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que un período de retención más largo sea requerido o permitido por la ley. Cuando ya no necesitemos su información personal, la eliminaremos de forma segura o la anonimizaremos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Transferencias Internacionales de Datos</h2>
            <p className="leading-relaxed mb-4">
              Su información puede ser transferida y mantenida en computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción. Al usar nuestro Servicio, usted consiente la transferencia de su información a estas instalaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Cambios a Esta Política de Privacidad</h2>
            <p className="leading-relaxed mb-4">
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos de cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "Última actualización". Se le aconseja revisar esta Política de Privacidad periódicamente para cualquier cambio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contáctenos</h2>
            <p className="leading-relaxed mb-4">
              Si tiene alguna pregunta sobre esta Política de Privacidad, por favor contáctenos a través de nuestro sitio web.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/es" 
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}


import Link from 'next/link';

export const metadata = {
  title: 'Política de Reembolso | EPA608Practice.org',
  description: 'Política de Reembolso para EPA608Practice.org - Garantía de devolución de dinero para plataforma de práctica de certificación EPA 608',
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
          Política de Reembolso
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Garantía de Devolución de Dinero</h2>
            <p className="leading-relaxed mb-4">
              Respaldamos nuestra plataforma de preparación para el examen EPA 608 con una <strong>garantía de devolución de dinero de 30 días</strong>. Si no está satisfecho con su compra o si no aprueba su examen de certificación EPA 608 después de usar nuestra plataforma, le reembolsaremos su pago en su totalidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Elegibilidad para Reembolso</h2>
            <p className="leading-relaxed mb-4">
              Para ser elegible para un reembolso, debe cumplir con las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Su solicitud de reembolso debe realizarse dentro de <strong>30 días</strong> desde la fecha de su compra</li>
              <li>Debe haber intentado el examen de certificación EPA 608 al menos una vez después de comprar nuestro servicio</li>
              <li>Debe proporcionar prueba de su intento de examen (resultados del examen, confirmación de registro, o documentación similar)</li>
              <li>No debe haber violado nuestros Términos de Servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cómo Solicitar un Reembolso</h2>
            <p className="leading-relaxed mb-4">
              Para solicitar un reembolso, por favor contáctenos a través de nuestra <Link href="/es/contact" className="text-blue-600 hover:text-blue-700 underline">página de contacto</Link> e incluya la siguiente información:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Su dirección de correo electrónico de la cuenta</li>
              <li>Fecha de compra</li>
              <li>Número de pedido o ID de transacción (si está disponible)</li>
              <li>Razón de la solicitud de reembolso</li>
              <li>Prueba del intento de examen (si aplica)</li>
            </ul>
            <p className="leading-relaxed mb-4">
              Revisaremos su solicitud y responderemos dentro de <strong>5 días hábiles</strong>. Una vez aprobado, los reembolsos se procesarán a su método de pago original dentro de 7-10 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Procesamiento de Reembolsos</h2>
            <p className="leading-relaxed mb-4">
              Los reembolsos aprobados se procesarán al método de pago original utilizado para la compra. Los tiempos de procesamiento pueden variar según su proveedor de pago:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Tarjetas de Crédito/Débito:</strong> 7-10 días hábiles</li>
              <li><strong>PayPal:</strong> 3-5 días hábiles</li>
              <li><strong>Otros Métodos de Pago:</strong> Puede variar, por favor contáctenos para plazos específicos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Artículos No Reembolsables</h2>
            <p className="leading-relaxed mb-4">
              Los siguientes no son elegibles para reembolsos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Solicitudes de reembolso realizadas después de 30 días desde la fecha de compra</li>
              <li>Cuentas que han sido suspendidas o terminadas por violación de nuestros Términos de Servicio</li>
              <li>Compras realizadas a través de plataformas de terceros (por favor contacte la plataforma directamente)</li>
              <li>Solicitudes de reembolso sin prueba de intento de examen (para la garantía "Aprueba o te devolvemos tu dinero")</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceso a la Cuenta Después del Reembolso</h2>
            <p className="leading-relaxed mb-4">
              Una vez aprobado y procesado su reembolso, se revocará el acceso de su cuenta a las funciones premium. Conservará el acceso a las funciones gratuitas de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Derechos Legales</h2>
            <p className="leading-relaxed mb-4">
              Esta política de reembolso no afecta sus derechos legales como consumidor. Si se encuentra en una jurisdicción que proporciona derechos adicionales de protección al consumidor, esos derechos permanecen en vigor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contáctenos</h2>
            <p className="leading-relaxed mb-4">
              Si tiene alguna pregunta sobre esta Política de Reembolso, por favor contáctenos a través de nuestra <Link href="/es/contact" className="text-blue-600 hover:text-blue-700 underline">página de contacto</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex gap-4">
          <Link 
            href="/es/terms" 
            className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            ← Términos de Servicio
          </Link>
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


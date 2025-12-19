import Link from 'next/link';

export const metadata = {
  title: 'Términos de Servicio | EPA608Practice.org',
  description: 'Términos de Servicio para EPA608Practice.org - Plataforma de práctica para certificación EPA 608',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 sm:mb-8">
          Términos de Servicio
        </h1>
        
        <p className="text-sm text-gray-600 mb-8">
          Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="leading-relaxed mb-4">
              Al acceder y utilizar EPA608Practice.org ("el Servicio"), usted acepta y se compromete a cumplir con los términos y disposiciones de este acuerdo. Si no está de acuerdo en cumplir con lo anterior, por favor no utilice este servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Licencia de Uso</h2>
            <p className="leading-relaxed mb-4">
              Se otorga permiso para acceder temporalmente a los materiales en el sitio web de EPA608Practice.org únicamente para visualización personal, no comercial y transitoria. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Modificar o copiar los materiales</li>
              <li>Usar los materiales para cualquier propósito comercial o para cualquier exhibición pública</li>
              <li>Intentar realizar ingeniería inversa de cualquier software contenido en el sitio web</li>
              <li>Eliminar cualquier notación de derechos de autor u otra propiedad de los materiales</li>
              <li>Transferir los materiales a otra persona o "reflejar" los materiales en cualquier otro servidor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cuentas de Usuario</h2>
            <p className="leading-relaxed mb-4">
              Para acceder a ciertas funciones del Servicio, puede ser necesario crear una cuenta. Usted es responsable de mantener la confidencialidad de las credenciales de su cuenta y de todas las actividades que ocurran bajo su cuenta. Usted acepta:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Proporcionar información precisa, actual y completa al crear su cuenta</li>
              <li>Mantener y actualizar oportunamente la información de su cuenta</li>
              <li>Mantener la seguridad de su contraseña e identificación</li>
              <li>Aceptar toda la responsabilidad por todas y cada una de las actividades que ocurran bajo su cuenta</li>
              <li>Notificarnos inmediatamente de cualquier uso no autorizado de su cuenta</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Suscripción y Pago</h2>
            <p className="leading-relaxed mb-4">
              Algunas funciones del Servicio pueden requerir pago. Al suscribirse a un plan de pago, usted acepta pagar las tarifas especificadas en el momento de la compra. Todas las tarifas no son reembolsables excepto según lo requiera la ley o como se establezca explícitamente en nuestra <Link href="/es/refund" className="text-blue-600 hover:text-blue-700 underline">Política de Reembolso</Link>.
            </p>
            <p className="leading-relaxed mb-4">
              Ofrecemos una garantía de devolución de dinero de 30 días. Si no está satisfecho con su compra o no aprueba su examen de certificación EPA 608 después de usar nuestra plataforma, puede ser elegible para un reembolso completo. Por favor revise nuestra <Link href="/es/refund" className="text-blue-600 hover:text-blue-700 underline">Política de Reembolso</Link> para detalles completos, términos y condiciones.
            </p>
            <p className="leading-relaxed mb-4">
              Nos reservamos el derecho de cambiar nuestros precios en cualquier momento. Los cambios de precio no afectarán las suscripciones existentes hasta el próximo ciclo de facturación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Derechos de Propiedad Intelectual</h2>
            <p className="leading-relaxed mb-4">
              El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de EPA608Practice.org y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes. Nuestras marcas registradas y vestimenta comercial no pueden ser utilizadas en relación con ningún producto o servicio sin nuestro consentimiento previo por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contenido del Usuario</h2>
            <p className="leading-relaxed mb-4">
              Usted conserva la propiedad de cualquier contenido que envíe, publique o muestre en o a través del Servicio. Al enviar contenido, nos otorga una licencia mundial, no exclusiva, libre de regalías para usar, reproducir, modificar y distribuir dicho contenido únicamente con el propósito de proporcionar y mejorar el Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Usos Prohibidos</h2>
            <p className="leading-relaxed mb-4">
              Usted no puede usar el Servicio:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>De cualquier manera que viole cualquier ley o regulación nacional o internacional aplicable</li>
              <li>Para transmitir, o procurar el envío de, cualquier material publicitario o promocional sin nuestro consentimiento previo por escrito</li>
              <li>Para hacerse pasar por o intentar hacerse pasar por la empresa, un empleado de la empresa, otro usuario, o cualquier otra persona o entidad</li>
              <li>De cualquier manera que infrinja los derechos de otros, o de cualquier manera sea ilegal, amenazante, fraudulenta o dañina</li>
              <li>Para participar en cualquier otra conducta que restrinja o inhiba el uso o disfrute del Servicio de cualquier persona</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Descargo de Responsabilidad</h2>
            <p className="leading-relaxed mb-4">
              Los materiales en el sitio web de EPA608Practice.org se proporcionan "tal cual". EPA608Practice.org no otorga garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.
            </p>
            <p className="leading-relaxed mb-4">
              Además, EPA608Practice.org no garantiza ni hace ninguna representación con respecto a la precisión, los resultados probables o la confiabilidad del uso de los materiales en su sitio web o de otra manera relacionados con dichos materiales o en cualquier sitio vinculado a este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitaciones de Responsabilidad</h2>
            <p className="leading-relaxed mb-4">
              En ningún caso EPA608Practice.org o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en el sitio web de EPA608Practice.org, incluso si EPA608Practice.org o un representante autorizado de EPA608Practice.org ha sido notificado oralmente o por escrito de la posibilidad de tal daño.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Precisión de los Materiales</h2>
            <p className="leading-relaxed mb-4">
              Los materiales que aparecen en el sitio web de EPA608Practice.org podrían incluir errores técnicos, tipográficos o fotográficos. EPA608Practice.org no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual. EPA608Practice.org puede hacer cambios en los materiales contenidos en su sitio web en cualquier momento sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Enlaces</h2>
            <p className="leading-relaxed mb-4">
              EPA608Practice.org no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado de este tipo. La inclusión de cualquier enlace no implica el respaldo de EPA608Practice.org del sitio. El uso de cualquier sitio web vinculado de este tipo es bajo el propio riesgo del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Modificaciones</h2>
            <p className="leading-relaxed mb-4">
              EPA608Practice.org puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Ley Aplicable</h2>
            <p className="leading-relaxed mb-4">
              Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de los Estados Unidos y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en esa ubicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Información de Contacto</h2>
            <p className="leading-relaxed mb-4">
              Si tiene alguna pregunta sobre estos Términos de Servicio, por favor contáctenos a través de nuestro sitio web.
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


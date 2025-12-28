import Link from 'next/link';
import Image from 'next/image';

// Compute baseUrl and trim trailing slash
const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export async function generateMetadata() {
  return {
    metadataBase: new URL(`${baseUrl}/`),
    title: "EPA 608 Practice Test en Español (Gratis) – Preguntas Tipo Examen (2025) | EPA608Practice",
    description: "EPA 608 practice test en español con preguntas tipo examen, retroalimentación instantánea y explicaciones claras. Empieza gratis (20 preguntas) y desbloquea 300+ por $9.99.",
    alternates: {
      canonical: "/es/epa-608-practice-test-en-espanol",
      languages: {
        "x-default": "/epa-608-practice-test",
        en: "/epa-608-practice-test",
        es: "/es/epa-608-practice-test-en-espanol",
      },
    },
    openGraph: {
      title: "EPA 608 Practice Test en Español (Gratis) – Preguntas Tipo Examen (2025) | EPA608Practice",
      description: "EPA 608 practice test en español con preguntas tipo examen, retroalimentación instantánea y explicaciones claras. Empieza gratis (20 preguntas) y desbloquea 300+ por $9.99.",
      type: "website",
      locale: "es_ES",
      url: "/es/epa-608-practice-test-en-espanol",
    },
    twitter: {
      card: "summary_large_image",
      title: "EPA 608 Practice Test en Español (Gratis) – Preguntas Tipo Examen (2025) | EPA608Practice",
      description: "EPA 608 practice test en español con preguntas tipo examen, retroalimentación instantánea y explicaciones claras.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function EPA608PracticeTestEspanolPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/es">
            <Image 
              src="/logo.png" 
              alt="HVAC Prep" 
              width={400}
              height={96}
              className="h-10 sm:h-12 md:h-16 w-auto object-contain"
              quality={100}
              priority
              unoptimized
            />
          </Link>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
            <Link
              href="/es"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/es/pricing"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Precios
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4 sm:mb-6">
            EPA 608 Practice Test Gratis
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
            EPA 608 Practice Test en Español (Gratis)
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-6 sm:mb-8 font-semibold">
            Preguntas tipo examen, retroalimentación instantánea y explicaciones claras.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Si te estás preparando para el examen EPA Sección 608, practicar con preguntas tipo examen es la forma más rápida de ganar confianza. Este EPA 608 practice test gratis te ayuda a aprender qué pregunta el examen, por qué la respuesta correcta es correcta y qué debes tener en cuenta el día del examen.
          </p>
          
          <ul className="list-none space-y-2 mb-6 sm:mb-8 max-w-2xl mx-auto text-left">
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Empieza gratis en segundos (sin configuración)</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Retroalimentación instantánea + explicaciones</span>
            </li>
            <li className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-700">
              <span className="text-green-600 text-xl">✓</span>
              <span>Estudia temas Universal, Tipo I, Tipo II y Tipo III</span>
            </li>
          </ul>

          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link 
              href="/es?quiz=1" 
              className="px-6 sm:px-12 md:px-20 lg:px-24 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Empezar Practice Test Gratis
            </Link>
            <Link 
              href="#plan-estudio" 
              className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-white text-blue-600 font-semibold text-base sm:text-lg md:text-xl rounded-lg hover:bg-gray-100 transition-colors border-2 border-blue-600"
            >
              Ver Plan de Estudio
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Cómo funciona este EPA 608 practice test
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-4 mb-6">
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Practica en sesiones cortas (repaso rápido)</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Enfócate en áreas débiles (aprendizaje dirigido)</span>
              </li>
              <li className="flex items-start gap-3 text-base sm:text-lg md:text-xl text-gray-700">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Usa el modo examen para simular la experiencia del examen real (con tiempo + sin pistas)</span>
              </li>
            </ul>
            <div className="bg-blue-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-2">
                <strong>Acceso gratis:</strong> Empieza con 20 preguntas para probarlo.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700">
                <strong>Acceso completo:</strong> Desbloquea 300+ preguntas y explicaciones por $9.99.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal vs Types */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900">
            EPA 608: Universal vs Tipo I, II, III
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <Link 
              href="/es?quiz=1&type=universal" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Universal</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Cubre todos los tipos de sistemas (Tipo I, II y III). Certificación más completa.
              </p>
            </Link>
            <Link 
              href="/es?quiz=1&type=type1" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-green-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Tipo I</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Electrodomésticos pequeños con 5 libras o menos de refrigerante (refrigeradores domésticos, unidades de aire acondicionado de ventana).
              </p>
            </Link>
            <Link 
              href="/es?quiz=1&type=type2" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Tipo II</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Sistemas de alta presión (aires acondicionados residenciales y comerciales, bombas de calor).
              </p>
            </Link>
            <Link 
              href="/es?quiz=1&type=type3" 
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-t-4 border-orange-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer block"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">Tipo III</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Sistemas de baja presión (equipos industriales grandes, enfriadores).
              </p>
            </Link>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-center text-gray-700 mb-6 max-w-3xl mx-auto">
            La mayoría de los estudiantes eligen Universal porque abre más oportunidades laborales y evita volver a examinarse más tarde.
          </p>
        </div>
      </section>

      {/* Sample Questions */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Ejemplos de preguntas del EPA 608 practice test (con explicaciones)
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-blue-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Pregunta 1:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">¿Cuál es el primer paso para recuperar refrigerante de un sistema?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Conectar el cilindro de recuperación</li>
                <li>B) Verificar la capacidad del cilindro de recuperación</li>
                <li>C) Encender la máquina de recuperación</li>
                <li>D) Abrir las válvulas de servicio</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Respuesta Correcta: B</strong> - Primero debes verificar la capacidad del cilindro de recuperación para asegurarte de que puede contener la cantidad de refrigerante que estás recuperando. Esto previene el sobrellenado y posibles peligros de seguridad.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Pregunta 2:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">¿Qué tipo de certificación se requiere para trabajar en electrodomésticos de baja presión?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Tipo I</li>
                <li>B) Tipo II</li>
                <li>C) Tipo III</li>
                <li>D) Universal</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Respuesta Correcta: C</strong> - La certificación Tipo III es específicamente para sistemas de refrigeración de baja presión. La certificación Universal también cubre los sistemas Tipo III.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8 rounded-2xl border-2 border-purple-200 shadow-lg">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-slate-900">Pregunta 3:</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">¿Qué nunca debes hacer al manejar refrigerantes?</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-base sm:text-lg text-gray-700">
                <li>A) Usar equipo de recuperación</li>
                <li>B) Verificar fugas</li>
                <li>C) Mezclar diferentes refrigerantes</li>
                <li>D) Almacenar en cilindros aprobados</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <p className="text-sm sm:text-base text-gray-700">
                  <strong className="text-green-600">Respuesta Correcta: C</strong> - Mezclar diferentes refrigerantes está estrictamente prohibido. Cada refrigerante tiene propiedades específicas, y mezclarlos puede crear condiciones peligrosas y dañar el equipo.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/es?quiz=1" 
              className="inline-block px-6 sm:px-12 md:px-20 py-3 sm:py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              ¿Listo para más como estas? Empieza el practice test gratis.
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Qué aprenderás practicando (lo que realmente evalúa el examen)
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-3 text-base sm:text-lg md:text-xl text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Procedimientos de recuperación y seguridad</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Detección de fugas y reglas de reparación</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Manejo de refrigerantes y regulaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Tipos de sistemas y categorías de presión</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl font-bold">•</span>
                <span>Mejores prácticas para servicio y cumplimiento</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Study Plan */}
      <section id="plan-estudio" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900">
            Plan de estudio (simple y efectivo)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">Plan de 7 días:</h3>
              <ul className="list-none space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Día 1-2:</span>
                  <span>Realiza el practice test gratis de 20 preguntas para identificar áreas débiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Día 3-4:</span>
                  <span>Enfócate en tus temas más débiles con práctica dirigida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Día 5-6:</span>
                  <span>Realiza practice tests completos en modo examen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">Día 7:</span>
                  <span>Revisa todas las respuestas incorrectas y realiza un practice test final</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 sm:p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">Plan de 2–4 semanas:</h3>
              <ul className="list-none space-y-3 text-base sm:text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Semana 1:</span>
                  <span>Completa el practice test gratis y desbloquea el acceso completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Semana 2:</span>
                  <span>Practica 50-100 preguntas por día, enfocándote en diferentes temas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Semana 3:</span>
                  <span>Realiza múltiples practice tests completos en modo examen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">Semana 4:</span>
                  <span>Revisa todas las áreas débiles y realiza practice tests finales hasta que consistentemente obtengas 85% o más</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-slate-900 px-2">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Es este un EPA 608 practice test real?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Sí, nuestro practice test usa preguntas tipo examen que reflejan el formato, dificultad y temas que encontrarás en el examen real de certificación EPA 608. Aunque no podemos usar las preguntas exactas del examen oficial, nuestras preguntas se basan en las mismas regulaciones EPA y estándares de prueba.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Cuántas preguntas tiene el examen EPA 608?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  El examen EPA 608 típicamente contiene entre 25 y 50 preguntas, dependiendo del tipo de certificación que busques. Los exámenes Tipo I, II y III usualmente tienen 25 preguntas cada uno, mientras que los exámenes de certificación Universal pueden tener hasta 50 preguntas ya que cubren todos los tipos de sistemas.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Qué tan difícil es el examen EPA 608?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  La dificultad varía según la persona, pero la mayoría de los estudiantes encuentran el examen desafiante sin la preparación adecuada. La clave es entender las regulaciones EPA, los procedimientos de recuperación y los requisitos de seguridad. Con práctica consistente usando nuestro simulador, la mayoría de los estudiantes aprueban en su primer o segundo intento.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Cuál es la diferencia entre Core y Universal?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Core es el examen fundamental que cubre regulaciones EPA, impacto ambiental y seguridad. Certificación Universal = Core + Tipo I + Tipo II + Tipo III. La mayoría de los técnicos eligen Universal porque proporciona la mayor flexibilidad laboral y evita la necesidad de volver a examinarse más tarde si quieres trabajar en diferentes tipos de sistemas.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Puedo practicar gratis?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  ¡Sí! Ofrecemos 20 preguntas de práctica gratis con retroalimentación instantánea y explicaciones. Esto te permite experimentar nuestro simulador y ver la calidad de nuestras preguntas antes de decidir desbloquear el banco completo de 300+ preguntas por $9.99.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Tienen un EPA 608 practice test en PDF?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  No ofrecemos un PDF descargable. Nuestro simulador interactivo en línea proporciona retroalimentación instantánea, seguimiento de progreso y explicaciones detalladas que son más efectivas que los PDFs estáticos. El simulador funciona en cualquier dispositivo—teléfono, tableta o computadora—para que puedas estudiar en cualquier lugar sin necesidad de imprimir nada.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Cuánto tiempo debo estudiar?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  La mayoría de los estudiantes necesitan 1-4 semanas de práctica consistente, dependiendo de su conocimiento previo y horario de estudio. Recomendamos practicar 30-60 minutos por día. Usa nuestros planes de estudio de 7 días o 2-4 semanas como guía, y continúa practicando hasta que consistentemente obtengas 85% o más en los practice tests.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-blue-600">¿Qué puntaje necesito para aprobar?</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                  Necesitas obtener al menos 70% para aprobar el examen EPA 608. Sin embargo, recomendamos apuntar a 85% o más en los practice tests para asegurarte de estar bien preparado y confiado el día del examen. Nuestro practice test rastrea tus puntajes para que puedas monitorear tu progreso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-slate-900">
            ¿Listo para Empezar a Practicar?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Únete a miles de técnicos que ya han aprobado su certificación EPA 608 practicando con nuestro simulador. Empieza gratis y prepárate para el examen real.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/es?quiz=1" 
              className="px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Empezar EPA 608 Practice Test Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} EPA608Practice.org. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/es/contact"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Contacto
            </Link>
            <Link
              href="/es/terms"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Términos
            </Link>
            <Link
              href="/es/privacy"
              className="text-gray-600 hover:text-blue-600 text-xs sm:text-sm transition-colors duration-300"
            >
              Privacidad
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


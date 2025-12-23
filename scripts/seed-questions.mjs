/**
 * Seed / import de preguntas a Supabase desde archivos JS.
 *
 * Uso:
 * 1) Modo default (EN + ES con rutas del proyecto):
 *    node scripts/seed-questions.js
 *
 * 2) Modo single file:
 *    node scripts/seed-questions.js --lang es --file app/es/data.js
 *
 * Flags:
 *  --ignore-existing   -> NO actualiza existentes (ON CONFLICT DO NOTHING)
 *  --batch 500         -> tamaño de batch (default 200)
 *
 * Requiere env:
 *  - SUPABASE_URL
 *  - SUPABASE_SERVICE_ROLE_KEY
 */

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';
import vm from 'vm';

// -------------------------
// ENV
// -------------------------
dotenv.config({ path: '.env.local' });
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  dotenv.config({ path: '.env' });
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Faltan variables de entorno');
  console.error('   Requeridas: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Cliente Supabase (service role) para bypass RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// -------------------------
// CLI args
// -------------------------
const args = process.argv.slice(2);

function getArg(name, fallback = null) {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  const val = args[idx + 1];
  return val ?? fallback;
}

const singleFile = getArg('--file');
const singleLang = getArg('--lang');
const batchSize = Number(getArg('--batch', '200')) || 200;
const ignoreExisting = args.includes('--ignore-existing');

// -------------------------
// Helpers
// -------------------------

/**
 * Extrae el array de questions desde un archivo JS usando VM sandbox.
 * Soporta:
 * - export const questions = [...]
 * - export default [...]
 * - imports / exports extra
 */
function extractQuestionsFromFile(filePath, langLabel = '') {
  try {
    const content = readFileSync(filePath, 'utf-8');

    // 1) Quitar imports (VM no los soporta)
    let modified = content.replace(/^\s*import[\s\S]*?;\s*$/gm, '');

    // 2) Convertir "export const questions =" -> "questions ="
    modified = modified.replace(/export\s+const\s+questions\s*=\s*/g, 'questions = ');

    // 3) Quitar "export default"
    modified = modified.replace(/export\s+default\s+/g, '');

    // 4) Quitar exports tipo "export { ... }"
    modified = modified.replace(/^\s*export\s*\{[\s\S]*?\}\s*;?\s*$/gm, '');

    // 5) Asegurar que exista un binding "questions" en el sandbox
    // (si el archivo hace "questions = [...]" ya está OK; si hace "const questions = [...]" también está OK)
    // Igual, creamos una variable en el contexto para capturar.
    const sandbox = {
      questions: null,
      console,
    };

    vm.createContext(sandbox);

    // Ejecutar en sandbox
    vm.runInContext(modified, sandbox, { timeout: 2000 });

    // Algunas variantes podrían declarar "const questions = [...]"
    // En VM, eso no lo asigna a sandbox.questions automáticamente.
    // Para capturarlo, intentamos evaluar "questions" después:
    let extracted = sandbox.questions;
    if (!extracted) {
      try {
        extracted = vm.runInContext('typeof questions !== "undefined" ? questions : null', sandbox);
      } catch (_) {
        extracted = null;
      }
    }

    if (!extracted || !Array.isArray(extracted)) {
      throw new Error(`No se encontró el array 'questions' en ${filePath}`);
    }

    console.log(`✅ Extraídas ${extracted.length} preguntas (${langLabel || 'lang?'}) desde ${filePath}`);
    return extracted;
  } catch (error) {
    console.error(`❌ Error extrayendo preguntas de ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Normaliza una pregunta para tu schema de Supabase.
 */
/**
 * Normaliza una pregunta para tu schema de Supabase.
 * 
 * ⚠️ IMPORTANTE: Corrige rutas de imágenes que tienen "/public/"
 * En Next.js, las imágenes en public/ se acceden sin el prefijo "/public"
 * Ejemplo: "/public/quiz-images/figure-i-2.png" -> "/quiz-images/figure-i-2.png"
 */
function normalizeQuestion(question, lang) {
  // Corregir ruta de imagen si tiene "/public/"
  let imagePath = question.image ?? null;
  if (imagePath && typeof imagePath === 'string' && imagePath.startsWith('/public/')) {
    imagePath = imagePath.replace('/public/', '/');
  }
  
  return {
    source_id: Number(question.id),
    lang,
    category: question.category || 'CORE',
    text: question.text,
    options: Array.isArray(question.options) ? question.options : [],
    correct_answer:
      Number.isInteger(question.correctAnswer)
        ? question.correctAnswer
        : Number.isInteger(question.correct_answer)
          ? question.correct_answer
          : 0,
    explanation: question.explanation ?? null,
    image: imagePath,
  };
}

/**
 * Upsert por batches usando UNIQUE(lang, source_id).
 * - ignoreExisting = true  -> no toca existentes (do nothing)
 * - ignoreExisting = false -> actualiza existentes (do update)
 */
async function upsertQuestions(questions, lang, batchSizeLocal) {
  const normalized = questions.map((q) => normalizeQuestion(q, lang));

  // Validación: duplicados dentro del propio archivo
  const seen = new Set();
  for (const q of normalized) {
    const key = `${q.lang}:${q.source_id}`;
    if (seen.has(key)) {
      throw new Error(`Duplicado dentro del archivo para (lang,source_id)=(${q.lang},${q.source_id})`);
    }
    seen.add(key);
  }

  let totalProcessed = 0;

  for (let i = 0; i < normalized.length; i += batchSizeLocal) {
    const batch = normalized.slice(i, i + batchSizeLocal);

    const { error } = await supabase
      .from('questions')
      .upsert(batch, {
        onConflict: 'lang,source_id',
        ignoreDuplicates: ignoreExisting,
      });

    if (error) {
      throw new Error(`Batch ${Math.floor(i / batchSizeLocal) + 1}: ${error.message}`);
    }

    totalProcessed += batch.length;
    console.log(`  📦 Batch ${Math.floor(i / batchSizeLocal) + 1}: OK (${totalProcessed}/${normalized.length})`);
  }

  return { processed: totalProcessed };
}

// -------------------------
// Main
// -------------------------
async function main() {
  console.log('🚀 Iniciando import/seed de preguntas...\n');
  console.log(`⚙️  batchSize=${batchSize} | ignoreExisting=${ignoreExisting}\n`);

  try {
    // Modo single-file por CLI
    if (singleFile && singleLang) {
      if (singleLang !== 'en' && singleLang !== 'es') {
        throw new Error(`--lang debe ser 'en' o 'es' (recibido: ${singleLang})`);
      }

      const absPath = resolve(process.cwd(), singleFile);
      const qs = extractQuestionsFromFile(absPath, singleLang);

      console.log('\n📤 Subiendo a Supabase...\n');
      const result = await upsertQuestions(qs, singleLang, batchSize);

      console.log('\n🎉 Importación completada!');
      console.log(`📊 Procesadas: ${result.processed} (${singleLang})`);
      return;
    }

    // Modo default (tus rutas originales)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const dataEnPath = join(__dirname, '..', 'app', 'data-en.js');
    const dataEsPath = join(__dirname, '..', 'app', 'es', 'data.js');

    const questionsEn = extractQuestionsFromFile(dataEnPath, 'en');
    const questionsEs = extractQuestionsFromFile(dataEsPath, 'es');

    console.log('\n📤 Subiendo a Supabase...\n');

    console.log('📝 Procesando preguntas EN...');
    const resultEn = await upsertQuestions(questionsEn, 'en', batchSize);
    console.log(`✅ EN: ${resultEn.processed} procesadas\n`);

    console.log('📝 Procesando preguntas ES...');
    const resultEs = await upsertQuestions(questionsEs, 'es', batchSize);
    console.log(`✅ ES: ${resultEs.processed} procesadas\n`);

    console.log('🎉 Seed completado exitosamente!');
    console.log('\n📊 Resumen:');
    console.log(`   EN: ${questionsEn.length} preguntas`);
    console.log(`   ES: ${questionsEs.length} preguntas`);
    console.log(`   Total: ${questionsEn.length + questionsEs.length} preguntas`);
  } catch (error) {
    console.error('\n❌ Error fatal:', error.message);
    if (error?.stack) console.error(error.stack);
    process.exit(1);
  }
}

main();

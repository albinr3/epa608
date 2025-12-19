/**
 * Script para migrar preguntas de app/data-en.js y app/es/data.js a Supabase
 * 
 * Uso: npm run seed:questions
 * 
 * Requiere variables de entorno:
 * - SUPABASE_URL
 * - SUPABASE_SERVICE_ROLE_KEY (solo para este script)
 */

import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';
import vm from 'vm';

// Cargar variables de entorno desde .env.local (o .env como fallback)
dotenv.config({ path: '.env.local' });
// Si no existe .env.local, intentar con .env
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  dotenv.config({ path: '.env' });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Cargar variables de entorno
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Faltan variables de entorno');
  console.error('   Requeridas: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

// Crear cliente de Supabase con service role key (bypass RLS)
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

/**
 * Extrae el array de questions de un archivo JS
 */
function extractQuestionsFromFile(filePath, lang) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    
    // Reemplazar "export const questions =" por "questions ="
    const modifiedContent = content.replace(
      /export\s+const\s+questions\s*=/,
      'questions ='
    );
    
    // Crear contexto sandbox
    const sandbox = { questions: null };
    vm.createContext(sandbox);
    
    // Ejecutar en sandbox
    vm.runInContext(modifiedContent, sandbox);
    
    if (!sandbox.questions || !Array.isArray(sandbox.questions)) {
      throw new Error(`No se encontró el array 'questions' en ${filePath}`);
    }
    
    console.log(`✅ Extraídas ${sandbox.questions.length} preguntas de ${lang}`);
    return sandbox.questions;
  } catch (error) {
    console.error(`❌ Error extrayendo preguntas de ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Normaliza una pregunta para insertarla en la BD
 */
function normalizeQuestion(question, lang) {
  return {
    source_id: question.id,
    lang: lang,
    category: question.category || 'CORE',
    text: question.text,
    options: question.options || [],
    correct_answer: question.correctAnswer || question.correct_answer || 0,
    explanation: question.explanation || null,
    image: question.image || null
  };
}

/**
 * Hace upsert de preguntas por batches
 */
async function upsertQuestions(questions, lang, batchSize = 200) {
  const normalized = questions.map(q => normalizeQuestion(q, lang));
  let totalInserted = 0;
  let totalUpdated = 0;
  
  for (let i = 0; i < normalized.length; i += batchSize) {
    const batch = normalized.slice(i, i + batchSize);
    
    try {
      // Upsert usando unique constraint (lang, source_id)
      const { data, error } = await supabase
        .from('questions')
        .upsert(batch, {
          onConflict: 'lang,source_id',
          ignoreDuplicates: false
        })
        .select();
      
      if (error) {
        throw error;
      }
      
      // Contar inserts vs updates (aproximado)
      const inserted = data.filter(d => d.created_at === d.updated_at).length;
      const updated = data.length - inserted;
      totalInserted += inserted;
      totalUpdated += updated;
      
      console.log(`  📦 Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} preguntas procesadas`);
    } catch (error) {
      console.error(`❌ Error en batch ${Math.floor(i / batchSize) + 1}:`, error.message);
      throw error;
    }
  }
  
  return { inserted: totalInserted, updated: totalUpdated };
}

/**
 * Función principal
 */
async function main() {
  console.log('🚀 Iniciando seed de preguntas...\n');
  
  try {
    // Rutas de los archivos
    const dataEnPath = join(__dirname, '..', 'app', 'data-en.js');
    const dataEsPath = join(__dirname, '..', 'app', 'es', 'data.js');
    
    // Extraer preguntas
    const questionsEn = extractQuestionsFromFile(dataEnPath, 'en');
    const questionsEs = extractQuestionsFromFile(dataEsPath, 'es');
    
    console.log('\n📤 Insertando preguntas en Supabase...\n');
    
    // Insertar preguntas EN
    console.log('📝 Procesando preguntas EN...');
    const resultEn = await upsertQuestions(questionsEn, 'en');
    console.log(`✅ EN: ${resultEn.inserted} insertadas, ${resultEn.updated} actualizadas\n`);
    
    // Insertar preguntas ES
    console.log('📝 Procesando preguntas ES...');
    const resultEs = await upsertQuestions(questionsEs, 'es');
    console.log(`✅ ES: ${resultEs.inserted} insertadas, ${resultEs.updated} actualizadas\n`);
    
    console.log('🎉 Seed completado exitosamente!');
    console.log(`\n📊 Resumen:`);
    console.log(`   EN: ${questionsEn.length} preguntas`);
    console.log(`   ES: ${questionsEs.length} preguntas`);
    console.log(`   Total: ${questionsEn.length + questionsEs.length} preguntas`);
    
  } catch (error) {
    console.error('\n❌ Error fatal:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Ejecutar
main();


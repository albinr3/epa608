import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { ensureUserExists } from '@/lib/db/ensureUserExists';
import crypto from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Faltan variables de entorno de Supabase');
}

// Cliente con service role para bypass RLS
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

/**
 * Genera un hash simple para usar como seed
 */
function hashString(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Convierte un hash hexadecimal a número para usar como seed
 */
function hashToSeed(hash) {
  return parseInt(hash.substring(0, 8), 16);
}

/**
 * Generador de números pseudoaleatorios con seed
 */
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }

  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }
}

/**
 * Permutación determinística usando Fisher-Yates con PRNG seeded
 */
function deterministicShuffle(array, seed) {
  const rng = new SeededRandom(seed);
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng.next() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

/**
 * GET /api/questions
 * 
 * Parámetros de query:
 * - lang: 'en' | 'es' (default: 'en')
 * - category: string (default: 'ALL')
 * - count: number (opcional; el server decide el real)
 * - reset: '1' (opcional; resetea el cursor a 0)
 * 
 * Respuesta:
 * {
 *   success: true,
 *   isPremium: boolean,
 *   limitApplied: number,
 *   category: string,
 *   lang: string,
 *   cursorBefore: number | null,
 *   cursorAfter: number | null,
 *   questions: [...]
 * }
 */
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const lang = searchParams.get('lang') || 'en';
    const rawCategory = searchParams.get('category') || 'ALL';
    
    /**
     * NORMALIZACIÓN DE CATEGORÍAS
     * 
     * PROBLEMA RESUELTO: Las categorías en la base de datos pueden estar guardadas como:
     * - "TYPE1" (sin espacio) o "TYPE 1" (con espacio)
     * - "TYPE2" (sin espacio) o "TYPE 2" (con espacio)
     * - "TYPE3" (sin espacio) o "TYPE 3" (con espacio)
     * 
     * SOLUCIÓN: Normalizamos la categoría y buscamos ambas variantes cuando es TYPE1/TYPE2/TYPE3.
     * Esto asegura que encontremos las preguntas independientemente de cómo estén guardadas en la BD.
     * 
     * ⚠️ IMPORTANTE: Si cambias esta lógica, asegúrate de que:
     * - Se busquen ambas variantes (con y sin espacio) para TYPE1, TYPE2, TYPE3
     * - Otras categorías (CORE, ALL) no se vean afectadas
     * - La query de Supabase use .or() para buscar ambas variantes
     */
    // Normalizar categoría: convertir a mayúsculas, remover espacios, y manejar casos especiales
    let category = rawCategory === 'ALL' ? 'ALL' : rawCategory.toUpperCase().trim();
    // Si la categoría es TYPE1, TYPE2, TYPE3, también buscar con espacio (TYPE 1, TYPE 2, TYPE 3)
    // Primero intentar sin espacio, luego con espacio si no encuentra resultados
    const categoryWithoutSpace = category.replace(/\s+/g, '');
    const categoryWithSpace = categoryWithoutSpace.replace(/TYPE(\d)/, 'TYPE $1');
    const countParam = searchParams.get('count');
    const limitParam = searchParams.get('limit'); // Parámetro para deep linking: limita preguntas para usuarios no premium
    const reset = searchParams.get('reset') === '1';

    // Headers para no cachear
    const noCacheHeaders = {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    };

    // Validar lang
    if (!['en', 'es'].includes(lang)) {
      return NextResponse.json(
        { error: 'Invalid lang. Must be "en" or "es"' },
        { status: 400, headers: noCacheHeaders }
      );
    }

    // Verificar autenticación
    const authResult = await auth();
    const userId = authResult.userId;
    const isAuthenticated = !!userId;
    

    let dbUser = null;
    let isPremium = false;
    let limitApplied = 3; // Default para anónimos

    if (isAuthenticated) {
      // Asegurar que el usuario existe en la BD (crearlo si no existe)
      try {
        dbUser = await ensureUserExists(userId);
        isPremium = dbUser.is_premium || false;
        limitApplied = isPremium ? (countParam ? parseInt(countParam, 10) : Infinity) : 20;
      } catch (error) {
        console.error('Error ensuring user exists:', error);
        // Si falla crear el usuario, devolver error en lugar de tratar como anónimo
        return NextResponse.json(
          { error: `Error ensuring user exists: ${error.message}` },
          { status: 500, headers: noCacheHeaders }
        );
      }
    }

    // Obtener TODAS las preguntas matching (lang + category o ALL)
    let query = supabase
      .from('questions')
      .select('source_id, text, options, correct_answer, explanation, category, image')
      .eq('lang', lang);

    if (category !== 'ALL') {
      /**
       * BÚSQUEDA DE CATEGORÍAS CON Y SIN ESPACIO
       * 
       * Para TYPE1, TYPE2, TYPE3: buscar ambas variantes (con y sin espacio)
       * porque la base de datos puede tenerlas guardadas de cualquier forma.
       * 
       * Ejemplo: Si buscamos "TYPE1", también buscamos "TYPE 1" para encontrar todas las preguntas.
       */
      // Intentar buscar con la categoría normalizada (sin espacios)
      // Si es TYPE1/TYPE2/TYPE3, también buscar con espacio (TYPE 1/TYPE 2/TYPE 3)
      if (categoryWithoutSpace.match(/^TYPE[123]$/)) {
        // Buscar ambas variantes: sin espacio y con espacio usando OR de Supabase
        query = query.or(`category.eq.${categoryWithoutSpace},category.eq.${categoryWithSpace}`);
      } else {
        query = query.eq('category', categoryWithoutSpace);
      }
    }

    const { data: allQuestions, error: questionsError } = await query.order('source_id', { ascending: true });

    if (questionsError) {
      console.error('Error fetching questions:', questionsError);
      return NextResponse.json(
        { error: 'Error fetching questions' },
        { status: 500, headers: noCacheHeaders }
      );
    }

    if (!allQuestions || allQuestions.length === 0) {
      return NextResponse.json({
        success: true,
        isPremium,
        limitApplied: 0,
        category,
        lang,
        cursorBefore: null,
        cursorAfter: null,
        questions: []
      }, { headers: noCacheHeaders });
    }

    // Para usuarios anónimos: devolver 3 preguntas aleatorias simples
    if (!isAuthenticated) {
      // Para anónimos, usar un seed basado en la fecha del día
      const daySeed = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
      const seed = hashToSeed(hashString(`${daySeed}|${lang}|${category}`));
      const shuffled = deterministicShuffle(allQuestions.map(q => q.source_id), seed);
      const selected = shuffled.slice(0, 3).map(sourceId => 
        allQuestions.find(q => q.source_id === sourceId)
      ).filter(Boolean);

      return NextResponse.json({
        success: true,
        isPremium: false,
        limitApplied: 3,
        category,
        lang,
        cursorBefore: null,
        cursorAfter: null,
        questions: selected.map(q => ({
          source_id: q.source_id,
          text: q.text,
          options: q.options,
          correct_answer: q.correct_answer,
          explanation: q.explanation,
          category: q.category,
          image: q.image
        }))
      }, { headers: noCacheHeaders });
    }

    // Para usuarios autenticados: usar permutación determinística (sin cursor)
    const seedVersion = 1; // Puede incrementarse en el futuro para resetear
    const seedString = `${userId}|${lang}|${category}|${seedVersion}`;
    const seed = hashToSeed(hashString(seedString));

    // Generar permutación determinística
    const sourceIds = allQuestions.map(q => q.source_id);
    const permutation = deterministicShuffle(sourceIds, seed);

    /**
     * SELECCIÓN DE PREGUNTAS SEGÚN TIPO DE USUARIO Y DEEP LINKING
     * 
     * DEEP LINKING: El parámetro `limit` se usa cuando el usuario accede mediante deep linking
     * (ej: ?quiz=1&type=type1). Esto limita el número de preguntas mostradas:
     * - type1, type2, type3 → 10 preguntas
     * - core → 20 preguntas
     * 
     * LÓGICA:
     * - Usuarios premium: pueden ver todas las preguntas (o count si se especifica)
     * - Usuarios no premium: 
     *   - Si viene limitParam (deep linking): usar ese límite (10 o 20)
     *   - Si no viene limitParam: mostrar 20 preguntas por defecto
     * 
     * ⚠️ IMPORTANTE: El limitParam solo se aplica a usuarios autenticados no premium.
     * Los usuarios anónimos siempre ven 3 preguntas aleatorias (manejado arriba).
     */
    // Para usuarios premium: devolver permutación completa (o count si viene)
    // Para usuarios no premium: usar limit si viene (deep linking), sino 20 por defecto
    let selectedSourceIds;
    if (isPremium) {
      if (countParam) {
        const count = parseInt(countParam, 10);
        selectedSourceIds = permutation.slice(0, count);
      } else {
        selectedSourceIds = permutation;
      }
    } else {
      // No premium: usar limit si viene (deep linking), sino 20 por defecto
      if (limitParam) {
        const limit = parseInt(limitParam, 10);
        selectedSourceIds = permutation.slice(0, limit);
      } else {
        // Sin limit: siempre devolver las primeras 20
        selectedSourceIds = permutation.slice(0, 20);
      }
    }

    const selectedQuestions = selectedSourceIds.map(sourceId =>
      allQuestions.find(q => q.source_id === sourceId)
    ).filter(Boolean);

    return NextResponse.json({
      success: true,
      isPremium,
      limitApplied: selectedQuestions.length,
      category,
      lang,
      cursorBefore: null,
      cursorAfter: null,
      questions: selectedQuestions.map(q => ({
        source_id: q.source_id,
        text: q.text,
        options: q.options,
        correct_answer: q.correct_answer,
        explanation: q.explanation,
        category: q.category,
        image: q.image
      }))
    }, { headers: noCacheHeaders });

  } catch (error) {
    console.error('Error in /api/questions:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
  }
}


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
    const category = rawCategory === 'ALL' ? 'ALL' : rawCategory.toUpperCase().trim();
    const countParam = searchParams.get('count');
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
      query = query.eq('category', category);
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

    // Para usuarios premium: devolver permutación completa (o count si viene)
    // Para usuarios no premium: devolver siempre permutation.slice(0, 20)
    let selectedSourceIds;
    if (isPremium) {
      if (countParam) {
        const count = parseInt(countParam, 10);
        selectedSourceIds = permutation.slice(0, count);
      } else {
        selectedSourceIds = permutation;
      }
    } else {
      // No premium: siempre devolver las primeras 20
      selectedSourceIds = permutation.slice(0, 20);
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


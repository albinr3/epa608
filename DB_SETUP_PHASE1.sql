-- ============================================
-- FASE 1: Setup de Base de Datos para EPA608
-- ============================================
-- Ejecuta este SQL en el SQL Editor de Supabase

-- 1. Crear tabla questions
CREATE TABLE IF NOT EXISTS questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id INTEGER NOT NULL,
  lang TEXT NOT NULL CHECK (lang IN ('en', 'es')),
  category TEXT NOT NULL,
  text TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer INTEGER NOT NULL,
  explanation TEXT,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(lang, source_id)
);

-- Índices para questions
CREATE INDEX IF NOT EXISTS idx_questions_lang_category ON questions(lang, category);
CREATE INDEX IF NOT EXISTS idx_questions_lang_source_id ON questions(lang, source_id);

-- 2. Alterar tabla users para añadir campos premium
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS premium_granted_at TIMESTAMP WITH TIME ZONE;

-- 3. Crear tabla user_quiz_cursor para NO repetición
CREATE TABLE IF NOT EXISTS user_quiz_cursor (
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lang TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'ALL',
  cursor INTEGER NOT NULL DEFAULT 0,
  seed_version INTEGER NOT NULL DEFAULT 1,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (user_id, lang, category)
);

-- Índice para user_quiz_cursor
CREATE INDEX IF NOT EXISTS idx_user_quiz_cursor_user_lang ON user_quiz_cursor(user_id, lang);

-- Función para actualizar updated_at automáticamente en questions
CREATE OR REPLACE FUNCTION update_questions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at en questions
DROP TRIGGER IF EXISTS update_questions_updated_at ON questions;
CREATE TRIGGER update_questions_updated_at 
BEFORE UPDATE ON questions
FOR EACH ROW 
EXECUTE FUNCTION update_questions_updated_at();

-- Función para actualizar updated_at automáticamente en user_quiz_cursor
CREATE OR REPLACE FUNCTION update_user_quiz_cursor_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at en user_quiz_cursor
DROP TRIGGER IF EXISTS update_user_quiz_cursor_updated_at ON user_quiz_cursor;
CREATE TRIGGER update_user_quiz_cursor_updated_at 
BEFORE UPDATE ON user_quiz_cursor
FOR EACH ROW 
EXECUTE FUNCTION update_user_quiz_cursor_updated_at();

ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quiz_cursor ENABLE ROW LEVEL SECURITY;

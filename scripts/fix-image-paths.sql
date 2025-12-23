-- ============================================
-- Script para corregir rutas de imágenes en la base de datos
-- ============================================
-- Este script corrige las rutas de imágenes que tienen "/public/" 
-- y las reemplaza con la ruta correcta sin "/public/"
--
-- En Next.js, las imágenes en la carpeta public/ se acceden sin el prefijo "/public"
-- Ejemplo: /public/quiz-images/figure-i-2.png -> /quiz-images/figure-i-2.png
--
-- Ejecuta este SQL en el SQL Editor de Supabase

-- Ver cuántas rutas tienen el problema
SELECT 
  COUNT(*) as total_with_public,
  lang
FROM questions 
WHERE image LIKE '/public/%'
GROUP BY lang;

-- Corregir todas las rutas que tienen "/public/" 
UPDATE questions
SET image = REPLACE(image, '/public/', '/')
WHERE image LIKE '/public/%';

-- Verificar que se corrigieron
SELECT 
  COUNT(*) as remaining_with_public,
  lang
FROM questions 
WHERE image LIKE '/public/%'
GROUP BY lang;

-- Ver algunas rutas corregidas como ejemplo
SELECT 
  source_id,
  lang,
  image
FROM questions 
WHERE image IS NOT NULL
ORDER BY lang, source_id
LIMIT 10;


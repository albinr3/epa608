import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Intentamos pedir 1 usuario. 
    // Si la tabla está vacía, devolverá [] (array vacío), lo cual ES ÉXITO.
    // Si la conexión falla, caerá en el error.
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1);

    if (error) {
      console.error("Error de Supabase:", error);
      return NextResponse.json({ 
        status: 'Error ❌', 
        message: error.message,
        details: 'Revisa tus credenciales o el nombre de la tabla'
      }, { status: 500 });
    }

    return NextResponse.json({ 
      status: 'Éxito ✅', 
      message: 'Conexión establecida correctamente',
      data: data 
    });

  } catch (err) {
    return NextResponse.json({ 
      status: 'Error Crítico 💀', 
      message: 'Probablemente las variables no se están leyendo',
      error: err.message,
      env_check: {
        url_exists: !!process.env.SUPABASE_URL, // Devolverá true si existe
        key_exists: !!process.env.SUPABASE_ANON_KEY // Devolverá true si existe
      }
    }, { status: 500 });
  }
}


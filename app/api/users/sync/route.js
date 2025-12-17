import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { upsertUser, getUserByClerkId, markWelcomeEmailSent } from '@/lib/db/users';
import { sendWelcomeEmail } from '@/lib/emails/sendWelcomeEmail';

// Mapa para rastrear sincronizaciones en progreso por userId (evita duplicados simultáneos)
const syncInProgress = new Map();

/**
 * Endpoint para sincronizar usuario desde el cliente
 * Se llama cuando un usuario se autentica por primera vez
 * POST /api/users/sync
 */
export async function POST(req) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/users/sync/route.js:11',message:'Sync endpoint called',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
  // #endregion
  
  let userId = null;
  try {
    // Verificar autenticación (ahora el middleware procesa esta ruta)
    const authResult = await auth();
    userId = authResult.userId;
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/users/sync/route.js:17',message:'Auth check completed',data:{hasUserId:!!userId,userId},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
    // #endregion

    if (!userId) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/users/sync/route.js:21',message:'Unauthorized - no userId',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Verificar si ya hay una sincronización en progreso para este usuario
    if (syncInProgress.has(userId)) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/users/sync/route.js:35',message:'Sync already in progress for user',data:{userId},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
      // #endregion
      // Esperar a que termine la sincronización en progreso
      const inProgressPromise = syncInProgress.get(userId);
      try {
        const result = await inProgressPromise;
        return NextResponse.json({
          success: true,
          user: result.user,
          message: 'User already synced',
        });
      } catch (error) {
        // Si la sincronización anterior falló, continuar con esta
        syncInProgress.delete(userId);
      }
    }

    // Crear una promesa para esta sincronización
    const syncPromise = (async () => {
      try {

        // Obtener datos del usuario de Clerk
        const user = await currentUser();
        
        if (!user) {
          throw new Error('User data not found');
        }

        const email = user.primaryEmailAddress?.emailAddress;

        if (!email) {
          throw new Error('Email not found');
        }

        // Verificar si el usuario ya existe en la base de datos
        const existingUser = await getUserByClerkId(userId);

        // Guardar o actualizar usuario en la base de datos
        const dbUser = await upsertUser({
          clerkId: userId,
          email: email,
          firstName: user.firstName || null,
          lastName: user.lastName || null,
        });

        // Si es un usuario nuevo y no se ha enviado el email de bienvenida, enviarlo
        if (!existingUser || !existingUser.welcome_email_sent) {
          try {
            // Obtener el idioma de la cookie language-preference
            const cookieStore = await cookies();
            const languagePreference = cookieStore.get('language-preference')?.value || 'es';
            const lang = languagePreference === 'es' ? 'es' : 'en';
            
            await sendWelcomeEmail({
              userId: dbUser.id,
              email: email,
              firstName: user.firstName || null,
              lang: lang,
            });

            await markWelcomeEmailSent(dbUser.id);
          } catch (emailError) {
            console.error('Error sending welcome email:', emailError);
            // No fallar la sincronización si el email falla
          }
        }

        return {
          success: true,
          user: {
            id: dbUser.id,
            email: dbUser.email,
            welcomeEmailSent: dbUser.welcome_email_sent,
          },
        };
      } finally {
        // Remover del mapa cuando termine (exitoso o con error)
        syncInProgress.delete(userId);
      }
    })();

    // Guardar la promesa en el mapa
    syncInProgress.set(userId, syncPromise);

    // Esperar a que termine la sincronización
    const result = await syncPromise;

    return NextResponse.json(result);
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/7375362b-177d-4802-b0fe-ffaa1942d9d8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'api/users/sync/route.js:88',message:'Sync error caught',data:{error:error.message,stack:error.stack?.substring(0,500)},timestamp:Date.now(),sessionId:'debug-session',runId:'run4',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    console.error('Error syncing user:', error);
    
    // Asegurarse de limpiar el mapa en caso de error
    if (userId) {
      syncInProgress.delete(userId);
    }
    
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}


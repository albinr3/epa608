# Cómo Verificar si Ngrok está Funcionando Correctamente

## Paso 1: Verificar que Ngrok está Corriendo

### En Windows (PowerShell):
```powershell
# Verificar si ngrok está corriendo
Get-Process -Name ngrok -ErrorAction SilentlyContinue

# Si está corriendo, deberías ver información del proceso
# Si no está corriendo, no verás nada
```

### Alternativa - Verificar el puerto 4040:
Abre tu navegador y ve a: `http://localhost:4040`

Si ngrok está corriendo, verás la interfaz web de ngrok con información sobre los túneles activos.

## Paso 2: Verificar la URL de Ngrok

Si ngrok está corriendo, deberías ver algo como:
```
Forwarding: https://abc123.ngrok-free.app -> http://localhost:3000
```

**IMPORTANTE**: Copia la URL que empieza con `https://` (no la de `http://localhost:3000`)

## Paso 3: Verificar que la URL está Configurada en Clerk

1. Ve a tu dashboard de Clerk: https://dashboard.clerk.com
2. Navega a "Webhooks" en el menú lateral
3. Busca tu endpoint configurado
4. Verifica que la URL sea: `https://tu-url-ngrok.ngrok-free.app/api/webhooks/clerk`
5. Asegúrate de que el evento `user.created` esté seleccionado

## Paso 4: Probar el Webhook Manualmente

Puedes probar si el webhook está recibiendo peticiones:

1. **Desde la consola del servidor**: Cuando creas un nuevo usuario, deberías ver logs que empiezan con `[WEBHOOK]` o `[DEBUG]`

2. **Desde Clerk Dashboard**:
   - Ve a "Webhooks" > Tu endpoint
   - Haz clic en "Send test event"
   - Selecciona "user.created"
   - Deberías ver en los logs del servidor que el webhook fue recibido

## Paso 5: Verificar los Logs del Servidor

Cuando creas un nuevo usuario con Google OAuth, deberías ver en la consola del servidor (donde corre `npm run dev`):

```
[WEBHOOK] Clerk webhook endpoint hit at: [timestamp]
[WEBHOOK] Headers received: {...}
[DEBUG] Webhook event received: {...}
```

Si NO ves estos logs, significa que:
- Ngrok no está corriendo
- La URL de ngrok no está configurada correctamente en Clerk
- El webhook no está llegando a tu servidor

## Solución de Problemas

### Ngrok no está corriendo:
```bash
# Iniciar ngrok (asegúrate de que tu servidor Next.js esté corriendo en el puerto 3000)
ngrok http 3000
```

### La URL de ngrok cambió:
- Cada vez que reinicias ngrok, obtienes una nueva URL
- Debes actualizar la URL en Clerk Dashboard cada vez que cambia
- Considera usar una cuenta de ngrok con dominio fijo (plan de pago) para desarrollo

### El webhook no está llegando:
1. Verifica que ngrok esté corriendo: `http://localhost:4040`
2. Verifica que la URL en Clerk sea correcta
3. Verifica que el servidor Next.js esté corriendo en el puerto 3000
4. Revisa los logs del servidor para ver errores



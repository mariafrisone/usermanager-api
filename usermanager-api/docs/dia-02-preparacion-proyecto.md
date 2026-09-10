# Día 2: Preparación del proyecto

## Qué he hecho

- He inicializado el proyecto Node.js.
- He instalado Express.
- He configurado TypeScript.
- He creado la carpeta src.
- He creado el archivo src/server.ts.
- He arrancado el servidor en local.
- He probado la respuesta desde navegador o Thunder Client.

## Comando para arrancar el proyecto

```bash
npm run dev
```

## URL de prueba

```text
http://localhost:3000
```

## Respuesta obtenida

```json
{
  "message": "UserManager API"
}
```

## Explicación personal
¿Que hace el archivo src/server.ts?
- Nos permite crear el servidor, definir el puerto, recibir datos y devolver información del proyecto.

¿Que hace app listen?
- Inicia el servidor y lo deja escuchando las peticiones en el puerto 3000 (el que estamos usando en nuestro proyecto).

¿Qué hace app.get?
- Me permite definir que respuesta tiene que devolver la API cuando recibe una petición.

¿Por qué usamos express.json?
- Nos permite escribir menos código y asi facilitar la creación de servidores y APIs a través de Node.js.

## Error provocado

¿Qué error apareció?
- Al acceder a `http://localhost:3000/` apareció un error `404 Not Found`.

¿Qué significa?
- El servidor estaba funcionando, pero Express no encontró una ruta que coincidiera con `/`, porque la ruta se cambió temporalmente a `/inicio`.

¿Cómo lo solucioné?
- Cambié `app.get("/inicio", ...)` de nuevo a `app.get("/", ...)` y volví a probar la URL 
`http://localhost:3000/`.




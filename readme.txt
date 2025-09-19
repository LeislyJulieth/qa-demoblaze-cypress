Prueba Funcional Automatizada – Flujo de inicios de sesión

Descripción
Este proyecto contiene la automatización de un flujo de compra E2E en la página de demostración OpenCart usando Cypress.

Casos de prueba implementados

Crear un nuevo usuario en signup

    -Envío de credenciales únicas.
    -Validación de respuesta con mensaje de éxito.

Intentar crear un usuario ya existente en signup

    -Reutiliza el usuario previamente creado.
    -Espera mensaje de error: "This user already exist".

Login con usuario y password correctos

    -Uso del usuario creado.
    -Validación de respuesta con Auth_token.

Login con credenciales inválidas

    -Usuario inexistente o password incorrecta.
    -Validación de mensajes de error conocidos.

Requisitos previos

Node.js >= 14.x
npm >= 6.x
Git instalado
Cypress >= 12.x

Reportes

El proyecto puede usar cypress-mochawesome-reporter para generar reportes HTML.
-Los reportes aparecerán en la carpeta reports/.
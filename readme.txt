Prueba Funcional Automatizada – Flujo de Compra OpenCart (Cypress)

Descripción
Este proyecto contiene la automatización de un flujo de compra E2E en la página de demostración OpenCart usando Cypress.

El flujo automatizado incluye:

Agregar dos productos al carrito.
Visualizar el carrito de compras.
Completar el Checkout como invitado (Guest Checkout).
Finalizar la compra hasta la confirmación: "Your order has been placed!".

Requisitos Previos


Node.js 14+
npm o yarn
Cypress 12+ (instalado localmente en el proyecto)
Git
Navegador Chrome, Edge o Firefox

Ejecución de Pruebas

Para ejecutar en modo interactivo:
npx cypress open


Seleccionar el test del flujo de compra y ejecutarlo (Compra.cy.js)

Para ejecutar en modo headless (CLI):

npx cypress open
Seleccionar la prueba E2E
seleccionar el archivo compra.cy.js

Esto ejecutará todos los tests y mostrará el resultado en la terminal.

Los reportes se generan automáticamente en la terminal o, si se configura un reporter como mochawesome, en HTML dentro de la carpeta cypress/reports.

Estructura del Proyecto

cypress/e2e/ – Contiene los tests E2E que yo implementé.
cypress.config.js – Configuración del proyecto Cypress.
package.json – Dependencias y scripts.
readme.txt – Instrucciones paso a paso de ejecución.

Consideraciones

La prueba está diseñada para ser reproducible en cualquier máquina con Node.js y Cypress.
Todos los pasos del flujo de compra están automatizados y verificados, incluyendo la confirmación de la orden.
# PWA - Trabajo Práctico N°1

## Customizar y Reducir nuestro CSS (Actualizado)

Este repositorio contiene una página web creada a partir de las consignas del trabajo práctico 1 de Programación Web Avanzada. Con este TP buscamos introducirnos al uso de las facilidades provistas por el framework frontend: Bootstrap.

## Tabla de contenido

- [Descripción](#descripción)
  - [Objetivo](#objetivo)
  - [Links](#links)
- [Mi Procedimiento](#mi-procedimiento)
  - [Personalizar Bootstrap](#personalizar-bootstrap)
  - [Reducir CSS](#reducir-css)
  - [Problemas y Soluciones](#problemas-y-soluciones)
  - [Recursos útiles](#recursos-útiles)

## Descripción

### Objetivo

El objetivo de este conjunto de prácticas es introducirnos al uso de las facilidades provistas por el framework, entendiendo el entorno y mediante respuesta responsive, con una temática asociada elegida a discreción.

Como segundo objetivo nos proponemos customizar nuestro CSS. Para esto haremos uso de Sass, node.js y PurgeCSS.

### Links

- ~~[URL del sitio en vivo](https://blackpachamame.github.io/pwa-tp1/)~~

## Mi Procedimiento

### Personalizar Bootstrap

_Para realizar estos pasos es un requisito tener instalado node.js_

- Instalando bootstrap con npm: `npm i bootstrap`
- Creando la carpeta sass y el archivo `custom.scss`
- Importando bootstrap `@import "../node_modules/bootstrap/scss/bootstrap";`
- Compilar nuestro `custom.scss` usando la extensión **Live Sass Compiler**
  - Para compilar hacemos click en _Watch Sass_, esto nos genera los archivos `custom.css` y `custom.css.map`
  - Para detener la compilación damos click en _Watching..._

### Reducir CSS

- Visitar [PurgeCSS](https://purgecss.com/CLI.html)
- Instalar PurgeCSS con npm: `npm i -g purgecss`
- Ir a `package.json`
  - Modificar el script test a "build"
  - Setear por `purgecss --css sass/custom.css --content index.html -o sass/reducido.css`
  - Ejecutar `npm run build` desde terminal (build es el nombre que le puse al script)
- Referir en el html al archivo `reducido.css` en lugar del `custom.css`
- Cada vez que cambiamos el estilo hay que esperar que se compile nuestro archivo de sass y volver a ejecutar `npm run build`

### Problemas y Soluciones

1. Mi `package.json` era diferente al que la profesora mostro en la clase.

_Solución:_ Esto fue porque no menciono el primer paso que era crear/iniciar el `package.json`. Para esto solo ponemos el siguiente comando en la consola: `npm init -y`

2. Creación de CSS customizados en la misma carpeta que mi SCSS. En este caso esto no es realmente un problema, pero es desorganizado y desprolijo.

_Solución:_ Para solucionarlo tuve que modificar las configuraciones de formart del compilador de Sass (extensión en VSC: Live Sass Compiler) y modificar esta línea `"savePath": null` por `"savePath": "/css"`. Esto hace que al compilar mi scss lo haga dentro de una carpeta llamada css. Sin embargo, hay que tener en cuenta que para que funcione correctamente, tu proyecto en el área de trabajo de VSC debe ser el que esté por encima de todos (si es que tenés más proyectos), de otra forma te crea los archivos css en una carpeta dentro del proyecto que esté por encima de los demás.

3. El CSS de Bootstrap pisaba las clases modificadas en mi propio CSS.

_Solución:_ Para evitar esto hay que colocar el css propio por debajo del `@import` de bootstrap en el `custom.scss`.

4. El PurgeCSS solo se aplicaba a mi index.html.

_Solución:_ Esto era porque estaba aplicando la purga solo al index en lugar de aplicarlo a todos mis .html: `"build": "purgecss --css css/custom.css --content index.html -o css/reducido.css"`. Para aplicarlo a todos los html solo cambie `index.html` por `*.html`.

### Recursos útiles

- [Manual de Sass](https://uniwebsidad.com/libros/sass/capitulo-1)
- [Documentación de Bootstrap 5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

# PWA - Trabajo Práctico N°1 (Mejorado)

Este repositorio contiene una página web creada a partir de las consignas del trabajo práctico 1 de Programación Web Avanzada. Con este TP buscamos introducirnos al uso de las facilidades provistas por el framework front-end: Bootstrap.

## Tabla de contenido

- [Descripción](#descripción)
  - [Objetivo](#objetivo)
  - [Mejora](#mejora)
  - [Links](#links)
- [Mi Procedimiento](#mi-procedimiento)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
  - [Problemas y soluciones](#problemas-y-soluciones)
  - [Desarrollo continuo](#desarrollo-continuo)
  - [Recursos útiles](#recursos-útiles)

## Descripción

### Objetivo

El objetivo de este conjunto de prácticas es introducirnos al uso de las
facilidades provistas por el framework, entendiendo el entorno y mediante
respuesta responsive, con una temática asociada elegida a discreción.

### Mejora

Como segundo objetivo nos proponemos customizar nuestro CSS. Para esto haremos uso de SASS, node.js y PurgeCSS.

### Links

- [URL del sitio en vivo](https://blackpachamame.github.io/pwa-tp1/)

## Mi Procedimiento

### Construido con

- HTML5
- CSS3
- SASS
- Flexbox
- Bootstrap 5
- Node.js
- PurgeCSS
- Visual Studio Code

### Lo que aprendí

- Bootstrap 5
- SASS (lo básico: anidación, @extent, @mixin, @include)
- Descargar Bootstrap con node.js
- Customizar mi CSS con SASS
- Minimizar mi CSS con PurgeCSS

### Problemas y soluciones

1. Mi `package.json` era diferente al que la profesora mostro en la clase.

<em>Solución</em>: Esto fue porque no menciono el primer paso que era crear/iniciar el `package.json`. Para esto solo ponemos el siguiente comando en la consola: `npm init -y`

2. Creación de CSS customizados en la misma carpeta que mi SCSS. En este caso esto no es realmente un problema, pero es desorganizado y desprolijo.

<em>Solución</em>: Para solucionarlo tuve que modificar las configuraciones de formart del compilador de SASS (extensión en VSC: Live Sass Compiler) y modificar esta línea `"savePath": null` por `"savePath": "/css"`. Esto hace que al compilar mi scss lo haga dentro de una carpeta llamada css. Sin embargo, hay que tener en cuenta que para que funcione correctamente, tu proyecto en el área de trabajo de VSC debe ser el que esté por encima de todos (si es que tenes más proyectos), de otra forma te crea los archivos css en una carpeta dentro del proyecto que esté por encima de los demás.

3. El CSS de Bootstrap pisaba las clases modificadas en mi propio CSS.

<em>Solución</em>: Para evitar esto hay que colocar el css propio por debajo del `@import` de bootstrap en el `custom.scss`.

4. El PurgeCSS solo se aplicaba a mi index.html.

<em>Solución</em>: Esto era porque estaba aplicando la purga solo al index en lugar de aplicarlo a todos mis .html: `"build": "purgecss --css css/custom.css --content index.html -o css/reducido.css"`. Para aplicarlo a todos los html solo cambie `index.html` por `*.html`.

### Desarrollo continuo

Había escuchado sobre SASS infinidad de veces, pero nunca me anime a probar qué tal era. En esta ocasión, aprovechando que usaríamos SASS para reducir el CSS de bootstrap, me puse a investigar un poco para aprender lo básico y ponerlo en práctica por primera vez. Me pareció sensacional porque simplifica mucho las cosas.

En el futuro la idea es hacer el 100% de mi CSS con SASS.

### Recursos útiles

- [Manual de SASS](https://uniwebsidad.com/libros/sass/capitulo-1)
- [Documentación de Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

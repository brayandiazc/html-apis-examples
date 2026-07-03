# Convenciones de vistas y layouts

> Cómo organizamos las páginas y la UI compartida en Demostración de Web APIs.
> **Última actualización**: 2026-07-02

## Estructura

No hay motor de plantillas ni layouts: es HTML estático multipágina. La coherencia
se logra repitiendo la **misma estructura** en cada página.

```text
index.html          # Portada: rejilla de tarjetas (.cards)
pages/<api>.html    # Una página por Web API
src/
├── css/styles.css  # Sistema de diseño único (compartido)
└── js/
    ├── theme.js    # Toggle de tema (compartido por todas las páginas)
    └── <api>.js    # Lógica del ejemplo correspondiente
```

## Estructura estándar de una página de ejemplo

```html
<html lang="es" data-theme="dark">
  <head>
    <!-- meta + Google Fonts + styles.css + theme.js -->
  </head>
  <body>
    <header class="page-header">
      <p class="brand">Web APIs</p>
      <button class="theme-toggle" aria-label="Cambiar tema">☾</button>
    </header>
    <main class="container">
      <header>
        <h1>Título de la API</h1>
        <a class="back-link" href="../index.html">← Volver al inicio</a>
      </header>
      <section>
        <article>
          <header>Nombre del sub-ejemplo</header>
          <!-- controles + <div class="output-area"> -->
        </article>
      </section>
    </main>
    <script src="../src/js/<api>.js"></script>
  </body>
</html>
```

## Reglas

- Repite el `head` compartido (fuente + `styles.css` + `theme.js`) en cada página.
- Todo resultado del ejemplo va en un `.output-area`.
- La UI sigue el [sistema de diseño](design-system.md); nada de estilos ad-hoc salvo
  detalles decorativos puntuales.
- Añadir un ejemplo = una `pages/<api>.html` + un `src/js/<api>.js` + una tarjeta en
  `index.html`.
- No renombrar los `id`/clases que consultan los scripts.

## Referencias

- [`design-system.md`](design-system.md)
- [`seo.md`](seo.md)

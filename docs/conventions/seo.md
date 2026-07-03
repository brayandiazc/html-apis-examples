# Convenciones de SEO

> Metadatos y buenas prácticas de SEO en Demostración de Web APIs.
> **Última actualización**: 2026-07-02

## Qué debe emitir cada página

Como no hay head compartido (sitio estático), cada `.html` incluye en su `<head>`:

- `<title>` único y descriptivo.
- `<meta name="description">` (al menos en la portada; recomendado en cada ejemplo).
- Idioma en `<html lang="es">`.
- Opcional para compartir: Open Graph (`og:title`, `og:description`, `og:image`,
  `og:url`) y Twitter Card.

## Reglas de indexación

Todas las páginas son públicas y educativas → `index, follow`. No hay áreas privadas
ni de autenticación que excluir.

## Reglas

- Cada página con un `<title>` distinto y claro (ya se cumple: "Demo DOM",
  "Acceso a la Cámara", etc.).
- URLs legibles y estables (`pages/<api>.html`); evitar parámetros innecesarios.
- Si se publica en GitHub Pages, considerar añadir `sitemap.xml` y una imagen OG
  (1200×630) para las tarjetas de redes sociales.

## Ejemplo

```html
<title>Acceso a la Cámara — Web APIs</title>
<meta name="description" content="Ejemplo de la API MediaDevices para acceder a la cámara." />
<meta property="og:image" content="https://brayandiazc.github.io/html-apis-examples/og-image.png" />
```

## Referencias

- [MDN — Metadata en HTML](https://developer.mozilla.org/es/docs/Web/HTML/Element/meta)

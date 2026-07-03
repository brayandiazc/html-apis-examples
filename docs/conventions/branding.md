# Convenciones de marca (branding)

> Identidad visual de Demostración de Web APIs.
> Para tokens y componentes de UI ver [`design-system.md`](design-system.md).
> **Última actualización**: 2026-07-02

## Identidad

El proyecto adopta la identidad de [brayandiazc.com](https://brayandiazc.com): estética
"terminal", tipografía monospace y una paleta con acento cálido en oscuro / azul en
claro. No tiene un logotipo propio; su marca visible es el texto **"Web APIs"** con el
prefijo `//` en la cabecera.

## Paleta y tipografía

Definidas como tokens en el [sistema de diseño](design-system.md):

- **Acento**: `#006cac` (claro) / `#ff6b01` (oscuro).
- **Fondo/Texto**: `#fdfdfd`/`#282728` (claro) · `#212737`/`#eaedf3` (oscuro).
- **Tipografía**: Google Sans Code (monospace) para toda la interfaz.

## Detalles gráficos de marca

- Prefijo `//` antes de la marca (`.brand::before`).
- Marcador `──` antes de los títulos de tarjeta (`.card h2::before`).
- Favicon/iconos: emoji o SVG inline sencillos, coherentes con el acento.

## Reglas de uso

- Usa la variante de color adecuada según el tema (claro/oscuro): los tokens ya lo
  resuelven vía `data-theme`.
- No hardcodees los colores de marca; referencia siempre los tokens.
- Si se crean assets compartibles (imagen OG 1200×630), mantener los fuentes en SVG.

## Referencias

- [`design-system.md`](design-system.md)
- [brayandiazc.com](https://brayandiazc.com) — fuente de la identidad.

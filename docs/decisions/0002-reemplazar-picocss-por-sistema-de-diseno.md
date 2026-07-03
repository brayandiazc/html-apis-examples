# 0002. Reemplazar Pico.css por un sistema de diseño propio

- **Estado**: Aceptada
- **Fecha**: 2026-07-02
- **Decisores**: Brayan Diaz C

## Contexto y problema

El proyecto usaba [Pico.css](https://picocss.com/) cargado desde un CDN para el
estilo base. Esto tenía tres inconvenientes:

1. **Sin identidad visual propia**: la interfaz se veía genérica y desalineada con
   la marca [brayandiazc.com](https://brayandiazc.com), ya aplicada en otros
   proyectos como `social-banner-template`.
2. **Sin tema oscuro conmutable** de forma coherente con esa marca.
3. **Dependencia externa en runtime**: una descarga de CDN adicional en cada página,
   en un proyecto cuyo principio es "cero dependencias".

Además existía un bug: 8 de 15 páginas enlazaban `style.css` (inexistente) en vez de
`styles.css`, por lo que su hoja local nunca cargaba.

## Opciones consideradas

- **Mantener Pico.css** — cero esfuerzo, pero perpetúa los tres problemas.
- **Adoptar otro framework CSS (Tailwind, Bootstrap…)** — utilidades listas, pero
  Tailwind exige build y Bootstrap vuelve a ser genérico y pesado.
- **Sistema de diseño propio con design tokens** — una sola hoja `styles.css` que
  reutiliza los tokens de brayandiazc.com, con temas claro/oscuro vía `data-theme`.

## Decisión

Elegimos el **sistema de diseño propio**. Se reescribió `src/css/styles.css` como una
hoja autocontenida con:

- Tokens de color claro/oscuro (fondo, texto, acento, muted, borde) de brayandiazc.com.
- Tipografía Google Sans Code y detalles gráficos de la marca (`//`, `──`).
- Estilos para todo el HTML semántico que ya usaban las páginas (sin renombrar los
  `id`/clases que consultan los scripts).
- Un `src/js/theme.js` que alterna el tema y lo persiste en `localStorage`.

Se eliminó la carga de Pico.css de las 16 páginas y se corrigió la ruta rota a
`styles.css`.

## Consecuencias

**Positivas:**

- Identidad visual coherente con la marca y tema claro/oscuro conmutable.
- Una dependencia externa menos (solo queda la tipografía, con fallback local).
- Se corrige el bug de la hoja de estilos que no cargaba en varias páginas.

**Negativas / costos:**

- Hay que mantener el CSS a mano en vez de delegar en un framework.

**Neutras / a vigilar:**

- Mantener los tokens sincronizados con brayandiazc.com si la marca evoluciona.

## Referencias

- [`../architecture/design.md`](../architecture/design.md) — sistema de diseño.
- [`../conventions/design-system.md`](../conventions/design-system.md) — convención.
- `social-banner-template` — proyecto hermano con los mismos tokens.

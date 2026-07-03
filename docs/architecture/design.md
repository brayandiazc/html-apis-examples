# Diseño — Demostración de Web APIs

> Decisiones de diseño técnico y visual: cómo se resuelve el problema y cómo se ve y
> se siente el producto. Las decisiones relevantes se promueven a ADRs en
> [`../decisions/`](../decisions/README.md).
>
> **Última actualización**: 2026-07-02

## Contexto y objetivos

- **Problema**: aprender y demostrar las Web APIs nativas exige ejemplos mínimos,
  legibles y ejecutables sin fricción.
- **Objetivos**: que cada ejemplo sea autocontenido, copiable y visualmente
  coherente; que la UI no distraiga de la API que se enseña.
- **No-objetivos**: no es una librería de componentes ni un producto comercial; no
  busca cubrir exhaustivamente cada API, sino ilustrar su uso esencial.

## Requisitos

### Funcionales

- Un menú (home) que enlace a cada ejemplo.
- Una página por API con controles interactivos y un área de resultado visible.
- Alternancia de tema claro/oscuro persistente.

### No funcionales

- **Rendimiento**: carga instantánea (archivos estáticos, sin build).
- **Accesibilidad**: contraste WCAG AA, foco visible, navegación por teclado.
- **Compatibilidad**: navegadores modernos; degradación elegante si falta una API.

## Sistema de diseño

La identidad visual reutiliza los **design tokens de [brayandiazc.com](https://brayandiazc.com)**
(el mismo lenguaje gráfico de `social-banner-template`). Ver la convención completa en
[`../conventions/design-system.md`](../conventions/design-system.md).

### Tokens de color

| Token       | Claro     | Oscuro    |
| ----------- | --------- | --------- |
| `--background` | `#fdfdfd` | `#212737` |
| `--foreground` | `#282728` | `#eaedf3` |
| `--accent`     | `#006cac` | `#ff6b01` |
| `--muted`      | `#e6e6e6` | `#343f60` |
| `--border`     | `#ece9e9` | `#4a5578` |

Los temas se conmutan con el atributo `data-theme` en `<html>` y se persisten en
`localStorage` (`src/js/theme.js`). El tema por defecto es oscuro, respetando
`prefers-color-scheme` cuando no hay elección previa.

### Tipografía y detalles

- **Fuente**: Google Sans Code (monospace) para toda la interfaz.
- **Marcas gráficas**: prefijo `//` en la marca y `──` en los títulos de tarjeta,
  guiño al estilo "terminal" de la marca.

### Componentes

Definidos en `src/css/styles.css` sobre HTML semántico (sin framework): cabecera con
marca + toggle, tarjetas (`.card`), bloques de demo (`article`), controles de
formulario, `.output-area` para resultados, y pie de página.

## Accesibilidad

- Contraste de color objetivo **WCAG AA** en ambos temas.
- Foco visible (`:focus-visible`) y navegación por teclado en todos los controles.
- `aria-label` en el botón de tema; `.sr-only` para etiquetas solo-lectores.
- Respeta `prefers-reduced-motion` desactivando transiciones y animaciones.

## Estados de la interfaz

Cada ejemplo contempla: **inicial**, **éxito** (resultado en `.output-area`),
**error/permiso denegado** (mensaje en color `--danger`) y, cuando aplica, **vacío**.

## Alternativas consideradas

| Alternativa                | Pros                       | Contras                                 | ¿Por qué se descartó?               |
| -------------------------- | -------------------------- | --------------------------------------- | ----------------------------------- |
| Mantener Pico.css          | Cero esfuerzo, ya integrado| Sin tema de marca, dependía de un CDN   | Falta de identidad y de tema oscuro |
| Framework CSS (Tailwind…)  | Utilidades rápidas         | Requiere build; ruido en el marcado     | Contradice el "sin build"           |

## Riesgos y mitigaciones

| Riesgo                                       | Impacto | Mitigación                                        |
| -------------------------------------------- | ------- | ------------------------------------------------- |
| Google Fonts no disponible offline           | Bajo    | `font-family` con fallback a monospace del sistema|
| Divergencia de tokens respecto a la marca     | Bajo    | Tokens documentados y centralizados en un solo CSS|

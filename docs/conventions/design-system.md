# Convenciones del sistema de diseño

> Tokens, componentes y reglas de UI de Demostración de Web APIs.
> Para el diseño técnico/UX del producto ver
> [`../architecture/design.md`](../architecture/design.md).
> **Última actualización**: 2026-07-02

## Stack

- **Librería de componentes**: ninguna — HTML semántico estilizado a mano.
- **Solución de estilos**: CSS plano con custom properties, en `src/css/styles.css`.
- **Origen de los tokens**: design tokens de [brayandiazc.com](https://brayandiazc.com).

## Tokens

Todos los tokens viven en `:root` / `[data-theme="…"]` de `src/css/styles.css`.

| Token             | Uso                                                    |
| ----------------- | ------------------------------------------------------ |
| `--background`    | Fondo de la página                                     |
| `--foreground`    | Texto principal                                        |
| `--accent`        | Color de marca: enlaces, botones, foco, acentos        |
| `--muted`         | Fondos sutiles (chips, code, áreas de salida)          |
| `--muted-foreground` | Texto secundario                                    |
| `--border`        | Bordes de tarjetas, inputs y separadores               |
| `--card`          | Fondo de tarjetas y bloques de demo                    |
| `--danger` / `--success` | Estados de error / éxito                        |

> Usa **siempre los tokens** (`var(--accent)`), nunca valores de color crudos en el
> marcado o los scripts. Los ejemplos que fijan color desde JS deben usar
> `var(--danger)` / `var(--success)`.

### Temas

- Se conmutan con `data-theme="light|dark"` en `<html>`.
- `src/js/theme.js` gestiona el toggle y persiste la elección en `localStorage`.
- Tema por defecto: oscuro, respetando `prefers-color-scheme` si no hay elección previa.

## Componentes

Definidos en `styles.css` sobre HTML semántico:

- `.page-header` — barra superior con marca (`.brand`) y `.theme-toggle`.
- `.card` / `.cards` — tarjetas de la portada.
- `article` — bloque de demostración con `header`.
- Controles de formulario (`input`, `select`, `button`, `button.secondary`).
- `.output-area` — contenedor de resultados de cada ejemplo.

Cada componente contempla sus estados: normal, hover, foco (`:focus-visible`) y
deshabilitado.

## Accesibilidad (baseline)

- Contraste mínimo objetivo: **WCAG AA** en ambos temas.
- Foco visible y navegación por teclado.
- `aria-label` en controles solo-icono; `.sr-only` para etiquetas de lector.
- Respeta `prefers-reduced-motion`.

## Anti-patrones

- Colores/espaciados hardcodeados fuera de los tokens.
- Reintroducir un framework CSS (Pico, Bootstrap…): ver [ADR 0002](../decisions/0002-reemplazar-picocss-por-sistema-de-diseno.md).
- Renombrar `id`/clases que consultan los scripts (`src/js/*.js`).

## Referencias

- [`../architecture/design.md`](../architecture/design.md)
- [`branding.md`](branding.md)

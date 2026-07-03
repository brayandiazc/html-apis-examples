# Convenciones de calidad y tooling

> Formato y consistencia de código en Demostración de Web APIs.
> **Última actualización**: 2026-07-02

## Stack

- **Formateador**: Prettier (HTML, CSS, JS, Markdown).
- **Estilo transversal**: EditorConfig (`.editorconfig`) — UTF-8, LF, 2 espacios,
  newline final, sin trailing whitespace.
- **Linter**: no hay uno obligatorio. Opcionales si se desea reforzar: HTMLHint,
  Stylelint, ESLint.
- **Auditoría de dependencias**: no aplica — el proyecto no tiene dependencias npm.
- **Git hooks**: no se usan; los checks son ligeros y manuales.

## Reglas

- El código se mantiene formateado con Prettier antes de commitear.
- Respeta `.editorconfig` (tu editor debería aplicarlo automáticamente).
- No introducir dependencias de runtime en las páginas (ver [ADR 0002](../decisions/0002-reemplazar-picocss-por-sistema-de-diseno.md)).
- HTML válido y semántico; JavaScript legible, sin transpilar.

## Comandos útiles

```bash
npx prettier --check .    # Verificar formato
npx prettier --write .    # Aplicar formato
```

> El script [`.github/scripts/format-markdown.sh`](../../.github/scripts/format-markdown.sh)
> formatea solo los archivos Markdown si se prefiere acotar el alcance.

## Referencias

- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

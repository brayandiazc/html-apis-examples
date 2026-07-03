# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [1.0.0] - 2026-07-02

### Added

- **Sistema de diseño propio** en `src/css/styles.css` basado en los design tokens
  de [brayandiazc.com](https://brayandiazc.com): paleta claro/oscuro, tipografía
  Google Sans Code y componentes (tarjetas, formularios, `.output-area`).
- **Tema claro/oscuro** conmutable y persistente (`src/js/theme.js`, `data-theme`),
  con botón de cambio en la cabecera de todas las páginas.
- **Estructura de documentación** según la plantilla `project-starter-template-es`:
  `docs/` (architecture, product, decisions, conventions, glosario) y gobernanza
  raíz (`CONTRIBUTING`, `CODE_OF_CONDUCT`, `SECURITY`, `CHANGELOG`).
- **Configuración de repositorio**: `.editorconfig`, `.gitignore`, plantillas de
  issues/PR, `dependabot.yml`, `labeler.yml` y workflow de ejemplo en `.github/`.
- ADR [0002](docs/decisions/0002-reemplazar-picocss-por-sistema-de-diseno.md) que
  documenta la migración desde Pico.css.

### Changed

- Rediseño completo de la portada (`index.html`) con rejilla de tarjetas y hero.
- Cabecera y pie unificados en las 15 páginas de ejemplos.
- `CODE_OF_CONDUCT.md` y `CONTRIBUTING.md` movidos de `.github/` a la raíz y
  ampliados según la plantilla.

### Removed

- **Pico.css**: se elimina la dependencia del CDN en las 16 páginas, sustituida por
  el sistema de diseño propio.

### Fixed

- Enlace roto a la hoja de estilos: 8 páginas referenciaban `style.css` (inexistente)
  en vez de `styles.css`; ahora todas cargan la hoja correcta.
- Referencia a la variable de Pico `--muted-color` en `device-info.html`, ahora
  `--muted-foreground`.

## [0.1.0] - 2024-03-08

### Added

- Colección inicial de 15 ejemplos de Web APIs (DOM, Canvas, cámara,
  almacenamiento, red, geolocalización, archivos, notificaciones, seguridad,
  otras APIs, canvas con imágenes, dispositivo, micrófono, audio/video e
  interfaz de usuario), maquetados con Pico.css.

[Unreleased]: https://github.com/brayandiazc/html-apis-examples/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/brayandiazc/html-apis-examples/compare/v0.1.0...v1.0.0
[0.1.0]: https://github.com/brayandiazc/html-apis-examples/releases/tag/v0.1.0

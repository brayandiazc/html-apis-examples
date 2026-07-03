# Stack Tecnológico

> Fuente de verdad de las tecnologías del proyecto. Es intencionalmente minimalista:
> el valor pedagógico está en usar la plataforma web **sin** capas intermedias.
>
> **Última actualización**: 2026-07-02

## Núcleo

| Categoría   | Tecnología                                   | Por qué                                                    |
| ----------- | -------------------------------------------- | ---------------------------------------------------------- |
| Marcado     | HTML5                                        | Estructura semántica de cada ejemplo                       |
| Estilos     | CSS3 (custom properties, grid, `data-theme`) | Sistema de diseño propio con temas claro/oscuro            |
| Lógica      | JavaScript (ES2015+, sin transpilar)         | Llamadas directas a las Web APIs, legibles sin build       |
| Tipografía  | Google Sans Code (Google Fonts)             | Estética monospace alineada con brayandiazc.com            |
| APIs        | Web APIs nativas del navegador               | Es el objeto de estudio del proyecto                       |

## Herramientas de desarrollo (opcionales)

| Categoría        | Herramienta                     | Uso                                              |
| ---------------- | ------------------------------- | ------------------------------------------------ |
| Servidor local   | Live Server (VS Code) / `http-server` | Servir los archivos con recarga en caliente |
| Editor           | VS Code (`.vscode/settings.json`) | Puerto de Live Server preconfigurado (5501)    |
| Formato          | Prettier / EditorConfig         | Estilo consistente (`.editorconfig`)             |
| CI (opcional)    | GitHub Actions                  | Validación/lint de HTML y enlaces (ejemplo)      |

## Lo que **no** usa (a propósito)

| Descartado                         | Razón                                                             |
| ---------------------------------- | ---------------------------------------------------------------- |
| Frameworks JS (React, Vue, …)      | Ocultarían la API nativa, que es justo lo que se quiere mostrar  |
| Bundlers (Vite, webpack, …)        | El proyecto no necesita build; se abre directo en el navegador   |
| Pico.css / frameworks CSS          | Sustituidos por un sistema de diseño propio (ver ADR 0002)       |
| Backend / base de datos            | Todos los ejemplos corren 100% en el cliente                     |

## Requisitos

- **Navegador moderno**: Chrome, Firefox, Edge o Safari en versión reciente.
- Algunas APIs (cámara, micrófono, portapapeles, notificaciones) requieren
  **contexto seguro** (`https://` o `http://localhost`) y permiso del usuario.
- No requiere instalación de dependencias.

## Servicios externos

| Servicio                | Uso                                              | Credenciales |
| ----------------------- | ------------------------------------------------ | ------------ |
| Google Fonts            | Tipografía Google Sans Code                      | Ninguna      |
| jsonplaceholder.typicode.com | Endpoint de ejemplo para el demo de Fetch/red | Ninguna     |

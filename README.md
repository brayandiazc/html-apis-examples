# Demostración de Web APIs

Ejemplos prácticos e interactivos de las principales **APIs nativas del navegador**:
DOM, Canvas, cámara, almacenamiento, red, geolocalización, archivos, notificaciones,
seguridad, multimedia, interfaz de usuario y más. Solo HTML, CSS y JavaScript — sin
backend, sin build y sin dependencias.

![License](https://img.shields.io/badge/license-MIT-blue)
![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-006cac)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Vista Previa](#vista-previa)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Ejemplos Incluidos](#ejemplos-incluidos)
- [Arquitectura de Carpetas](#arquitectura-de-carpetas)
- [Stack Tecnológico](#stack-tecnológico)
- [Testing](#testing)
- [Deployment](#deployment)
- [Documentación](#documentación)
- [Contribución](#contribución)
- [Roadmap](#roadmap)
- [Versionado](#versionado)
- [Autores](#autores)
- [Licencia](#licencia)
- [Apóyanos](#apóyanos)

## Descripción

Cada página es un ejemplo autocontenido de una Web API: el navegador **es** el
runtime, no hay servidor. El objetivo es didáctico — que el código de cada API se
lea sin abstracciones y pueda copiarse y adaptarse tal cual. La interfaz reutiliza
los design tokens de [brayandiazc.com](https://brayandiazc.com), con tema claro/oscuro.

## Características

- ✅ 15 ejemplos interactivos de Web APIs nativas.
- ✅ Sin dependencias de runtime ni proceso de build: abre un `.html` y listo.
- ✅ Tema claro/oscuro conmutable y persistente.
- ✅ Sistema de diseño propio, coherente con la marca.
- ✅ Degradación elegante: si una API no está disponible, se comunica en pantalla.

## Requisitos Previos

- Un **navegador web moderno** (Chrome, Firefox, Edge o Safari) reciente.
- Opcional: un servidor estático local (p. ej. la extensión _Live Server_ de VS Code)
  — necesario para las APIs que exigen **contexto seguro** (cámara, micrófono,
  portapapeles, notificaciones, geolocalización).

No requiere instalación de dependencias.

## Instalación

```bash
git clone https://github.com/brayandiazc/html-apis-examples.git
cd html-apis-examples
```

## Uso

### Opción A — abrir directamente

Abre `index.html` en tu navegador. Suficiente para la mayoría de los ejemplos.

### Opción B — servidor local (recomendada)

Algunas APIs requieren `http://localhost` o `https://`. Sirve la carpeta con
cualquier servidor estático:

```bash
# VS Code: extensión Live Server (puerto 5501, preconfigurado en .vscode/)
# o con Node:
npx http-server . -p 5501
# luego abre http://localhost:5501
```

## Ejemplos Incluidos

| Ejemplo               | API(s) que muestra                                      |
| --------------------- | ------------------------------------------------------- |
| DOM                   | Manipulación de elementos, nodos y eventos              |
| Canvas                | Dibujo 2D interactivo (color y grosor)                  |
| Canvas con Imágenes   | Cargar imagen y aplicar filtros (inversión de color)    |
| Cámara                | `MediaDevices.getUserMedia`, selección de cámara        |
| Micrófono             | Grabación de audio (`MediaRecorder`)                    |
| Audio y Video         | Reproducción de medios locales                          |
| Almacenamiento        | LocalStorage, SessionStorage y Cookies                  |
| Red                   | `fetch` y WebSocket                                     |
| Geolocalización       | `Geolocation`                                           |
| Archivos              | `File` / `FileReader`                                   |
| Notificaciones        | `Notification`                                          |
| Seguridad             | `Permissions` y `Credential Management`                 |
| Dispositivo y Posición| Detección de dispositivo y `DeviceOrientation`          |
| Interfaz de Usuario   | Fullscreen, Clipboard, Drag & Drop, `<dialog>`          |
| Otras APIs            | Canvas básico, WebGL (placeholder), Web Animations      |

## Arquitectura de Carpetas

```text
├── index.html          # Portada: menú de tarjetas
├── pages/              # Una página por Web API
│   ├── dom.html
│   ├── canvas.html
│   └── ...
├── src/
│   ├── css/
│   │   └── styles.css  # Sistema de diseño (tokens + temas + componentes)
│   ├── js/
│   │   ├── theme.js    # Toggle de tema claro/oscuro
│   │   └── <api>.js    # Lógica de cada ejemplo
│   └── img/            # Recursos gráficos
└── docs/               # Documentación (arquitectura, decisiones, convenciones)
```

## Stack Tecnológico

HTML5, CSS3 (custom properties, grid, `data-theme`) y JavaScript (ES2015+, sin
transpilar). Tipografía [Google Sans Code](https://fonts.google.com/). Sin
frameworks ni bundlers. Detalle completo en
[`docs/architecture/stack.md`](docs/architecture/stack.md).

## Testing

No hay tests automatizados: la verificación es **manual y por navegador**. Sigue el
[checklist de testing](docs/conventions/testing.md) al añadir o modificar un ejemplo.

## Deployment

Sitio estático: se publica sirviendo los archivos tal cual. La vía recomendada es
**GitHub Pages** (rama `main`, carpeta raíz). Procedimiento en
[`docs/conventions/deploy.md`](docs/conventions/deploy.md).

## Documentación

Toda la documentación vive en [`docs/`](docs/README.md):

| Documento                                                                | Responde a                    |
| ------------------------------------------------------------------------ | ----------------------------- |
| [`docs/architecture/architecture.md`](docs/architecture/architecture.md) | ¿Cómo está construido?        |
| [`docs/architecture/stack.md`](docs/architecture/stack.md)               | ¿Con qué tecnologías?         |
| [`docs/architecture/design.md`](docs/architecture/design.md)             | ¿Cómo se ve y por qué?        |
| [`docs/product/roadmap.md`](docs/product/roadmap.md)                     | ¿Hacia dónde va?              |
| [`docs/decisions/`](docs/decisions/README.md)                            | ¿Por qué cada decisión?       |
| [`docs/conventions/`](docs/conventions/README.md)                        | ¿Cómo trabajamos en el repo?  |

## Contribución

Los PRs son bienvenidos. Lee la [Guía de Contribución](CONTRIBUTING.md) para el flujo
de trabajo, los estándares de código y el formato de commits. Añadir un ejemplo =
una `pages/<api>.html` + un `src/js/<api>.js` + una tarjeta en `index.html`.

## Roadmap

Próximos pasos en [`docs/product/roadmap.md`](docs/product/roadmap.md): notas de API
por página, feature detection visible y nuevos ejemplos (Web Share, Battery, etc.).

## Versionado

Seguimos [Semantic Versioning](https://semver.org/). Consulta las
[etiquetas](https://github.com/brayandiazc/html-apis-examples/tags) y el
[CHANGELOG](CHANGELOG.md).

## Autores

- **Brayan Diaz C** — _Trabajo inicial_ — [@brayandiazc](https://github.com/brayandiazc)

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

## Apóyanos

Si te resulta útil, puedes apoyar el proyecto:

- ⭐ Dale una estrella al repositorio.
- [GitHub Sponsors](https://github.com/sponsors/brayandiazc)

---

⌨️ con ❤️ por [Brayan Diaz C](https://github.com/brayandiazc)

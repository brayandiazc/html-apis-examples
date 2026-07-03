# Roadmap — Demostración de Web APIs

> Estado y dirección del proyecto. Documento vivo.
> **Última actualización**: 2026-07-02

## Leyenda

- ✅ Hecho
- 🚧 En curso
- 📋 Planificado
- ⏸️ Diferido

## Visión

Ser una colección de referencia, clara y sin dependencias, de las Web APIs nativas
del navegador: cada ejemplo lo bastante pequeño para leerse de un vistazo y lo
bastante completo para copiarse y adaptarse.

## Estado actual

15 ejemplos operativos (DOM, Canvas, cámara, almacenamiento, red, geolocalización,
archivos, notificaciones, seguridad, otras APIs, canvas con imágenes, dispositivo,
micrófono, audio/video e interfaz de usuario), con sistema de diseño propio y tema
claro/oscuro. Documentación y gobernanza alineadas con la plantilla estándar.

## Por versión / fase

### v1.0 — Base sólida y estructura de plantilla ✅

- [x] 15 ejemplos de Web APIs funcionando.
- [x] Reemplazo de Pico.css por sistema de diseño propio (tokens de brayandiazc.com).
- [x] Tema claro/oscuro persistente.
- [x] Documentación (`docs/`), gobernanza y `.github/` según la plantilla.

### v1.1 — Pulido y accesibilidad 📋

- [ ] Revisión de accesibilidad por página (teclado, ARIA, contraste).
- [ ] Nota explicativa de la API en cada página (qué es, soporte, permisos).
- [ ] Indicador de disponibilidad/feature detection visible en cada demo.

### v1.2 — Cobertura ampliada 📋

- [ ] Nuevos ejemplos: Web Share, Vibration, Battery, Screen Wake Lock, Payment Request.
- [ ] Ejemplos con APIs experimentales, claramente marcados como tales.

## Backlog / ideas sin agendar

- Despliegue en GitHub Pages con dominio propio.
- Selector de idioma (ES/EN) para las descripciones.
- Enlaces a MDN por cada API.

## Fuera de alcance

- Convertirlo en framework o librería reutilizable: el valor está en la simplicidad.
- Añadir backend: todos los ejemplos deben correr 100% en el cliente.

## Cómo se actualiza este documento

- Revisar al cerrar cada versión/fase.
- Las decisiones que cambian el rumbo se registran como ADRs en
  [`../decisions/`](../decisions/README.md).

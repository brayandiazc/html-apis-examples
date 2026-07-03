# Convenciones de testing

> Cómo verificamos Demostración de Web APIs.
> **Última actualización**: 2026-07-02

## Enfoque

El proyecto es una colección de ejemplos front-end puros, **sin suite de tests
automatizados**. La verificación es **manual y por navegador**: cada ejemplo se
prueba abriéndolo y ejercitando su interacción. Esta convención define ese checklist
para mantener la consistencia.

## Checklist manual por ejemplo

Al añadir o modificar una página:

- [ ] La página carga sin errores en la consola del navegador.
- [ ] Los controles (botones, inputs) responden y actualizan el `.output-area`.
- [ ] **Feature detection**: si la API no existe o el permiso se deniega, se muestra
      un mensaje claro en vez de fallar en silencio.
- [ ] Funciona en **tema claro y oscuro** (probar el toggle).
- [ ] Responsive: se ve bien en móvil y escritorio.
- [ ] Navegación por teclado y foco visible en los controles.
- [ ] El enlace "Volver al inicio" y la carga de `styles.css`/`theme.js` funcionan.

## Navegadores objetivo

Probar al menos en un motor Chromium (Chrome/Edge) y en Firefox. Safari cuando el
ejemplo use APIs con soporte particular (cámara, notificaciones).

## APIs con requisitos especiales

- **Contexto seguro** (`https://` o `localhost`): cámara, micrófono, portapapeles,
  notificaciones, geolocalización. Servir con Live Server, no abrir como `file://`.

## Si en el futuro se añaden tests automatizados

- Recomendado: `node --test` para lógica extraíble y Playwright para E2E de UI.
- Regla general: un test verifica una cosa, con nombres descriptivos y sin
  dependencia de red, reloj u orden (deterministas).

## Referencias

- [`quality-tooling.md`](quality-tooling.md)

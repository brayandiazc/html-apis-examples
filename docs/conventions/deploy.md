# Convenciones de despliegue

> Cómo se publica Demostración de Web APIs. Al ser un sitio estático sin build, el
> despliegue es simplemente servir los archivos tal cual.
> **Última actualización**: 2026-07-02

## Stack de infraestructura

- **Hosting**: estático (recomendado: **GitHub Pages**; alternativas: Netlify, Vercel, S3).
- **DNS / TLS**: gestionado por el proveedor de hosting.
- **Build**: no aplica — no hay proceso de compilación.
- **CI/CD**: opcional (GitHub Actions) para validar HTML/enlaces y publicar en Pages.

## Ambientes

| Ambiente   | URL                                             | Rama   | Deploy                    |
| ---------- | ----------------------------------------------- | ------ | ------------------------- |
| Local      | `http://localhost:5501` (Live Server)           | —      | Manual (editor)           |
| Producción | GitHub Pages del repositorio                     | `main` | Automático o manual (Pages)|

## Publicar en GitHub Pages

1. Ajustes del repo → **Settings → Pages**.
2. **Source**: _Deploy from a branch_ → rama `main`, carpeta `/ (root)`.
3. Guardar. La página quedará disponible en la URL que indique GitHub Pages.

Como todos los assets se referencian con rutas relativas (`src/…`, `pages/…`), el
sitio funciona igual en la raíz del dominio o en un subpath de Pages.

## Reglas

- Solo se publica desde `main` (rama estable).
- Cada cambio publicado debe ser reproducible: basta con el contenido del repo.
- **Rollback**: revertir el commit en `main` (`git revert`) republica la versión previa.

## Verificación post-deploy

- Abrir la URL pública y confirmar que la portada y varios ejemplos cargan.
- Revisar que `styles.css` y las tipografías cargan (sin errores 404 en la consola).
- Probar una API que requiera contexto seguro (p. ej. cámara) — debe funcionar bajo
  HTTPS de Pages.

## Referencias

- [GitHub Pages](https://docs.github.com/es/pages)

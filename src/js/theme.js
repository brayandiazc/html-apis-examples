// Toggle de tema (claro/oscuro) persistente — estilo brayandiazc.com.
// Aplica el tema guardado o el preferido por el sistema y expone un botón
// con clase .theme-toggle que alterna y persiste la elección en localStorage.
(function () {
  "use strict";

  var STORAGE_KEY = "web-apis-theme";
  var root = document.documentElement;

  function preferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.textContent = theme === "dark" ? "☀" : "☾";
      btn.setAttribute(
        "aria-label",
        theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"
      );
    });
  }

  // Aplica cuanto antes para evitar parpadeo (script cargado en <head>).
  apply(preferredTheme());

  // Re-aplica al cargar el DOM para inicializar las etiquetas de los botones.
  document.addEventListener("DOMContentLoaded", function () {
    apply(root.getAttribute("data-theme") || preferredTheme());
  });

  document.addEventListener("click", function (event) {
    var btn = event.target.closest(".theme-toggle");
    if (!btn) return;
    var next =
      root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    apply(next);
  });
})();

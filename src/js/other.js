// Canvas API básico
document.getElementById("drawOnMiniCanvasBtn").addEventListener("click", () => {
  const canvas = document.getElementById("miniCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(10, 10, 50, 50);
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 50, 50);
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Canvas API", 10, 100);
});

// WebGL placeholder
(function () {
  const webglCanvas = document.getElementById("webglCanvasPlaceholder");
  const webglStatus = document.getElementById("webglStatus");
  try {
    const gl =
      webglCanvas.getContext("webgl") ||
      webglCanvas.getContext("experimental-webgl");
    if (gl && gl instanceof WebGLRenderingContext) {
      webglStatus.textContent =
        "WebGL inicializado correctamente. Se requiere más código para dibujar.";
      gl.clearColor(0.95, 0.95, 0.93, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    } else {
      webglStatus.textContent =
        "WebGL no está soportado o falló la inicialización.";
      webglStatus.style.color = "var(--danger)";
    }
  } catch (e) {
    webglStatus.textContent = `Error al inicializar WebGL: ${e.message}`;
    webglStatus.style.color = "var(--danger)";
  }
})();

// Web Animations API
document.getElementById("animateElementBtn").addEventListener("click", () => {
  const animatedEl = document.getElementById("animatedElement");
  if (typeof animatedEl.animate === "function") {
    animatedEl.animate(
      [
        {
          transform: "translateX(0px) rotate(0deg)",
          backgroundColor: "#ec4899",
        },
        {
          transform: "translateX(100px) rotate(90deg)",
          backgroundColor: "#f59e0b",
        },
        {
          transform: "translateX(0px) rotate(0deg)",
          backgroundColor: "#ec4899",
        },
      ],
      {
        duration: 2000,
        iterations: 1,
        easing: "ease-in-out",
      }
    );
  } else {
    alert("Web Animations API no soportada en este navegador.");
  }
});

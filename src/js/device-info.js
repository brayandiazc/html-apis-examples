const deviceTypeSpan = document.getElementById("deviceType");
const orientationSpan = document.getElementById("orientation");
const anglesSpan = document.getElementById("angles");
const orientationHelp = document.getElementById("orientationHelp");

// Detectar tipo de dispositivo
function getDeviceType() {
  if (navigator.userAgentData && navigator.userAgentData.mobile !== undefined) {
    return navigator.userAgentData.mobile ? "Móvil" : "Escritorio";
  }
  const ua = navigator.userAgent;
  if (/tablet|ipad|playbook|silk|android(?!.*mobi)/i.test(ua)) return "Tablet";
  if (/Mobile|iPhone|iPod|Android|BlackBerry|IEMobile|Silk/i.test(ua))
    return "Móvil";
  return "Escritorio";
}
deviceTypeSpan.textContent = getDeviceType();

// Detectar orientación
function updateOrientation() {
  if (window.screen && window.screen.orientation) {
    const type = window.screen.orientation.type;
    if (type.includes("portrait")) orientationSpan.textContent = "Vertical";
    else if (type.includes("landscape"))
      orientationSpan.textContent = "Horizontal";
    else orientationSpan.textContent = type;
  } else {
    orientationSpan.textContent =
      window.innerWidth > window.innerHeight ? "Horizontal" : "Vertical";
  }
}
updateOrientation();
window.addEventListener("resize", updateOrientation);

// DeviceOrientationEvent
function handleOrientation(event) {
  anglesSpan.textContent = `Alpha (z): ${
    event.alpha?.toFixed(2) ?? "-"
  }°, Beta (x): ${event.beta?.toFixed(2) ?? "-"}°, Gamma (y): ${
    event.gamma?.toFixed(2) ?? "-"
  }`;
}

if ("DeviceOrientationEvent" in window) {
  // En iOS modernos se requiere permiso explícito
  if (typeof DeviceOrientationEvent.requestPermission === "function") {
    orientationHelp.innerHTML =
      'Pulsa para permitir acceso a sensores: <button id="requestOrientation">Permitir</button>';
    document.getElementById("requestOrientation").onclick = () => {
      DeviceOrientationEvent.requestPermission().then((state) => {
        if (state === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
          orientationHelp.textContent =
            "Permiso concedido. Mueve el dispositivo para ver los ángulos.";
        } else {
          orientationHelp.textContent = "Permiso denegado para sensores.";
        }
      });
    };
  } else {
    window.addEventListener("deviceorientation", handleOrientation);
    orientationHelp.textContent = "Mueve el dispositivo para ver los ángulos.";
  }
} else {
  orientationHelp.textContent =
    "DeviceOrientationEvent no soportado en este navegador/dispositivo.";
}

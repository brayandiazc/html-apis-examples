const startCameraBtn = document.getElementById("startCameraBtn");
const cameraVideo = document.getElementById("cameraVideo");
const cameraStatus = document.getElementById("cameraStatus");
const cameraSelect = document.getElementById("cameraSelect");
let currentStream = null;

// Listar cámaras disponibles
async function listarCamaras() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    cameraStatus.textContent = "enumerateDevices no está soportado.";
    cameraStatus.style.color = "var(--danger)";
    return;
  }
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter((d) => d.kind === "videoinput");
    cameraSelect.innerHTML = "";
    videoDevices.forEach((device) => {
      const option = document.createElement("option");
      option.value = device.deviceId;
      option.text = device.label || `Cámara ${cameraSelect.length + 1}`;
      cameraSelect.appendChild(option);
    });
    if (videoDevices.length === 0) {
      cameraStatus.textContent = "No se encontraron cámaras.";
      cameraStatus.style.color = "var(--danger)";
    }
  } catch (err) {
    cameraStatus.textContent = "Error al listar cámaras: " + err.message;
    cameraStatus.style.color = "var(--danger)";
  }
}

// Detener cualquier stream anterior
function detenerStream() {
  if (currentStream) {
    currentStream.getTracks().forEach((track) => track.stop());
    currentStream = null;
  }
}

startCameraBtn.addEventListener("click", async () => {
  detenerStream();
  const deviceId = cameraSelect.value;
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const constraints = {
        video: deviceId ? { deviceId: { exact: deviceId } } : true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      cameraVideo.srcObject = stream;
      currentStream = stream;
      cameraStatus.textContent = "Cámara iniciada correctamente.";
      cameraStatus.style.color = "var(--success)";
    } catch (err) {
      cameraStatus.textContent = "Error al acceder a la cámara: " + err.message;
      cameraStatus.style.color = "var(--danger)";
    }
  } else {
    cameraStatus.textContent =
      "getUserMedia no está soportado en este navegador.";
    cameraStatus.style.color = "var(--danger)";
  }
});

// Listar cámaras al cargar la página
document.addEventListener("DOMContentLoaded", listarCamaras);

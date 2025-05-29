document.getElementById("getGeolocationBtn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        document.getElementById(
          "geolocationStatus"
        ).textContent = `Ubicación: Lat ${latitude.toFixed(
          2
        )}, Lon ${longitude.toFixed(2)}, Precisión ${accuracy}m.`;
        document.getElementById("geolocationStatus").style.color =
          "var(--success)";
        mostrarMapa(latitude, longitude);
      },
      (error) => {
        let msg = "Error de Geolocalización: ";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg += "Permiso denegado por el usuario.";
            break;
          case error.POSITION_UNAVAILABLE:
            msg += "La información de ubicación no está disponible.";
            break;
          case error.TIMEOUT:
            msg += "La solicitud de ubicación expiró.";
            break;
          default:
            msg += error.message || "Error desconocido.";
        }
        document.getElementById("geolocationStatus").textContent = msg;
        document.getElementById("geolocationStatus").style.color =
          "var(--danger)";
      },
      { enableHighAccuracy: true }
    );
  } else {
    document.getElementById("geolocationStatus").textContent =
      "Geolocalización no soportada.";
    document.getElementById("geolocationStatus").style.color = "var(--danger)";
  }
});

// Mostrar mapa con coordenadas
function mostrarMapa(lat, lon) {
  const mapContainer = document.getElementById("mapContainer");
  const url = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lon - 0.01
  }%2C${lat - 0.01}%2C${lon + 0.01}%2C${
    lat + 0.01
  }&layer=mapnik&marker=${lat}%2C${lon}`;
  mapContainer.innerHTML = `<iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${url}"></iframe>`;
}

// DeviceOrientation / Motion
const deviceSensorStatusPre = document.querySelector("#deviceSensorStatus pre");
function handleOrientation(event) {
  if (deviceSensorStatusPre)
    deviceSensorStatusPre.textContent = `Orientación:\nAlpha (z): ${
      event.alpha?.toFixed(2) ?? "-"
    }\nBeta (x): ${event.beta?.toFixed(2) ?? "-"}\nGamma (y): ${
      event.gamma?.toFixed(2) ?? "-"
    }`;
}
function handleMotion(event) {
  const acc = event.accelerationIncludingGravity;
  if (deviceSensorStatusPre)
    deviceSensorStatusPre.textContent = `Movimiento (con gravedad):\nX: ${
      acc.x?.toFixed(2) ?? "-"
    }\nY: ${acc.y?.toFixed(2) ?? "-"}\nZ: ${
      acc.z?.toFixed(2) ?? "-"
    }\nIntervalo: ${event.interval}ms`;
}
const startDeviceOrientationBtn = document.getElementById(
  "startDeviceOrientationBtn"
);
if (startDeviceOrientationBtn) {
  startDeviceOrientationBtn.addEventListener("click", () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission().then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("deviceorientation", handleOrientation);
        }
      });
    } else if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation);
    }
  });
}
const stopDeviceOrientationBtn = document.getElementById(
  "stopDeviceOrientationBtn"
);
if (stopDeviceOrientationBtn) {
  stopDeviceOrientationBtn.addEventListener("click", () => {
    window.removeEventListener("deviceorientation", handleOrientation);
    if (deviceSensorStatusPre) deviceSensorStatusPre.textContent = "";
  });
}
const startDeviceMotionBtn = document.getElementById("startDeviceMotionBtn");
if (startDeviceMotionBtn) {
  startDeviceMotionBtn.addEventListener("click", () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      DeviceMotionEvent.requestPermission().then((permissionState) => {
        if (permissionState === "granted") {
          window.addEventListener("devicemotion", handleMotion);
        }
      });
    } else if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", handleMotion);
    }
  });
}
const stopDeviceMotionBtn = document.getElementById("stopDeviceMotionBtn");
if (stopDeviceMotionBtn) {
  stopDeviceMotionBtn.addEventListener("click", () => {
    window.removeEventListener("devicemotion", handleMotion);
    if (deviceSensorStatusPre) deviceSensorStatusPre.textContent = "";
  });
}

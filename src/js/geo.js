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

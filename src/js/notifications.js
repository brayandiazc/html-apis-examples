document
  .getElementById("requestNotificationPermissionBtn")
  .addEventListener("click", () => {
    if (!("Notification" in window)) {
      document.getElementById("notificationStatus").textContent =
        "Este navegador no soporta notificaciones de escritorio.";
      document.getElementById("notificationStatus").style.color =
        "var(--danger)";
    } else if (Notification.permission === "granted") {
      document.getElementById("notificationStatus").textContent =
        "Permiso de notificación ya concedido.";
      document.getElementById("notificationStatus").style.color =
        "var(--success)";
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        document.getElementById(
          "notificationStatus"
        ).textContent = `Permiso de notificación: ${permission}.`;
        document.getElementById("notificationStatus").style.color =
          permission === "granted" ? "var(--success)" : "var(--danger)";
      });
    } else {
      document.getElementById("notificationStatus").textContent =
        "Permiso de notificación denegado previamente.";
      document.getElementById("notificationStatus").style.color =
        "var(--danger)";
    }
  });
document.getElementById("showNotificationBtn").addEventListener("click", () => {
  if (Notification.permission === "granted") {
    new Notification("¡Hola desde Pico.css!", {
      body: "Esta es una notificación de prueba.",
    });
    document.getElementById("notificationStatus").textContent =
      "Notificación enviada (revisa las notificaciones de tu sistema).";
    document.getElementById("notificationStatus").style.color =
      "var(--success)";
  } else {
    document.getElementById("notificationStatus").textContent =
      "Permiso de notificación no concedido. Solicítalo primero.";
    document.getElementById("notificationStatus").style.color = "var(--danger)";
  }
});
// Vibration API
document.getElementById("vibrateBtn").addEventListener("click", () => {
  if (navigator.vibrate) {
    navigator.vibrate(200);
    document.getElementById("vibrationStatus").textContent =
      "Vibración activada (si el dispositivo lo soporta).";
  } else {
    document.getElementById("vibrationStatus").textContent =
      "API de Vibración no soportada.";
  }
});
// Battery API
document.getElementById("getBatteryStatusBtn").addEventListener("click", () => {
  if (navigator.getBattery) {
    navigator
      .getBattery()
      .then((battery) => {
        let statusMsg = `Batería: ${battery.level * 100}%`;
        statusMsg += battery.charging ? " (cargando)" : " (descargando)";
        document.getElementById("batteryStatus").textContent = statusMsg;
        battery.addEventListener(
          "levelchange",
          () =>
            (document.getElementById(
              "batteryStatus"
            ).textContent = `Nivel de batería cambiado: ${
              battery.level * 100
            }%`)
        );
        battery.addEventListener(
          "chargingchange",
          () =>
            (document.getElementById(
              "batteryStatus"
            ).textContent = `Estado de carga cambiado: ${
              battery.charging ? "cargando" : "descargando"
            }`)
        );
      })
      .catch((err) => {
        document.getElementById(
          "batteryStatus"
        ).textContent = `Error API Batería: ${err.message}`;
      });
  } else {
    document.getElementById("batteryStatus").textContent =
      "API de Batería no soportada o deshabilitada.";
  }
});

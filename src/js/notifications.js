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

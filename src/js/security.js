document.getElementById("checkCredentialsBtn").addEventListener("click", () => {
  if (navigator.credentials) {
    document.getElementById("credentialStatus").textContent =
      "API Credential Management disponible. La implementación real es más compleja.";
    document.getElementById("credentialStatus").style.color = "var(--success)";
  } else {
    document.getElementById("credentialStatus").textContent =
      "API Credential Management no soportada.";
    document.getElementById("credentialStatus").style.color = "var(--danger)";
  }
});
function queryPermission(permissionName, displayName) {
  if (navigator.permissions) {
    navigator.permissions
      .query({ name: permissionName })
      .then((status) => {
        document.getElementById(
          "permissionStatus"
        ).textContent = `Estado del permiso para ${displayName}: ${status.state}`;
        document.getElementById("permissionStatus").style.color =
          "var(--success)";
        status.onchange = () =>
          (document.getElementById(
            "permissionStatus"
          ).textContent = `Permiso para ${displayName} cambiado a: ${status.state}`);
      })
      .catch((err) => {
        document.getElementById(
          "permissionStatus"
        ).textContent = `Error al consultar permiso para ${displayName}: ${err.message}`;
        document.getElementById("permissionStatus").style.color =
          "var(--danger)";
      });
  } else {
    document.getElementById("permissionStatus").textContent =
      "API de Permisos no soportada.";
    document.getElementById("permissionStatus").style.color = "var(--danger)";
  }
}
document
  .getElementById("queryPermissionGeoBtn")
  .addEventListener("click", () =>
    queryPermission("geolocation", "Geolocalización")
  );
document
  .getElementById("queryPermissionNotificationsBtn")
  .addEventListener("click", () =>
    queryPermission("notifications", "Notificaciones")
  );

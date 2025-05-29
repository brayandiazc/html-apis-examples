const fetchStatusPre = document.querySelector("#fetchStatus pre");
document.getElementById("fetchDataBtn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      fetchStatusPre.textContent = JSON.stringify(data, null, 2);
      document.getElementById("fetchStatus").style.color = "var(--success)";
    })
    .catch((err) => {
      document.getElementById(
        "fetchStatus"
      ).innerHTML = `<pre>Error en Fetch: ${err.message}</pre>`;
      document.getElementById("fetchStatus").style.color = "var(--danger)";
    });
});
let webSocket;
document.getElementById("connectWebSocketBtn").addEventListener("click", () => {
  if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    document.getElementById("webSocketStatus").textContent =
      "Ya conectado a WebSocket.";
    return;
  }
  try {
    webSocket = new WebSocket("wss://echo.websocket.org/");
    webSocket.onopen = () =>
      (document.getElementById("webSocketStatus").textContent =
        "Conectado a WebSocket echo server.");
    webSocket.onmessage = (event) =>
      (document.getElementById(
        "webSocketStatus"
      ).textContent = `Mensaje recibido de WebSocket: ${event.data}`);
    webSocket.onerror = (error) =>
      (document.getElementById(
        "webSocketStatus"
      ).textContent = `Error de WebSocket: ${
        error.message || "Ocurrió un error"
      }`);
    webSocket.onclose = () =>
      (document.getElementById("webSocketStatus").textContent =
        "Desconectado de WebSocket.");
  } catch (e) {
    document.getElementById(
      "webSocketStatus"
    ).textContent = `No se pudo conectar al WebSocket: ${e.message}`;
  }
});
document
  .getElementById("sendWebSocketMessageBtn")
  .addEventListener("click", () => {
    const message = document.getElementById("websocketMessage").value;
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(message);
      document.getElementById(
        "webSocketStatus"
      ).textContent = `Mensaje enviado: ${message}`;
      document.getElementById("websocketMessage").value = "";
    } else {
      document.getElementById("webSocketStatus").textContent =
        "WebSocket no conectado. Conéctate primero.";
    }
  });
// SSE
const connectSSEBtn = document.getElementById("connectSSEBtn");
const sseStatus = document.getElementById("sseStatus");
let eventSource;
if (connectSSEBtn) {
  connectSSEBtn.addEventListener("click", () => {
    if (eventSource && eventSource.readyState !== EventSource.CLOSED) {
      sseStatus.textContent =
        "Ya conectado a SSE. Cierra la conexión actual primero.";
      return;
    }
    try {
      eventSource = new EventSource(
        "https://mdn.github.io/dom-examples/server-sent-events/sse.php"
      );
      sseStatus.innerHTML = "Intentando conectar a SSE...";
      eventSource.onopen = () => {
        sseStatus.innerHTML = "Conectado a Server-Sent Events.";
      };
      eventSource.onmessage = (event) => {
        sseStatus.innerHTML += `<br>SSE Data: ${event.data}`;
      };
      eventSource.onerror = (err) => {
        sseStatus.innerHTML =
          "Error en Server-Sent Events. La conexión puede haberse cerrado o el servidor no está disponible.";
        sseStatus.style.color = "var(--danger)";
        eventSource.close();
      };
    } catch (e) {
      sseStatus.textContent = `Error al iniciar SSE: ${e.message}`;
    }
  });
}
// Estado de conexión
const onlineStatus = document.getElementById("onlineStatus");
if (onlineStatus) {
  const updateOnlineStatus = () => {
    onlineStatus.textContent = navigator.onLine ? "En línea" : "Fuera de línea";
    onlineStatus.style.color = navigator.onLine
      ? "var(--success)"
      : "var(--danger)";
  };
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  updateOnlineStatus();
}

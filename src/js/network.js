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

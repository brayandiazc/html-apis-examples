document.getElementById("changeContentBtn").addEventListener("click", () => {
  document.querySelector("#elementToChange").textContent =
    "¡Contenido cambiado con querySelector!";
});
document.getElementById("changeByIdBtn").addEventListener("click", () => {
  document.getElementById("elementToChange").textContent =
    "¡Contenido cambiado con getElementById!";
});
const nodeArea = document.getElementById("nodeManipulationArea");
document.getElementById("addNodeBtn").addEventListener("click", () => {
  const newNode = document.createTextNode(" Nuevo nodo de texto. ");
  nodeArea.appendChild(newNode);
});
document.getElementById("removeNodeBtn").addEventListener("click", () => {
  if (nodeArea.lastChild) nodeArea.removeChild(nodeArea.lastChild);
});
document.getElementById("eventButton").addEventListener("click", (event) => {
  document.getElementById(
    "eventOutput"
  ).textContent = `Evento: ${event.type} en ${event.target.tagName}. Coordenadas: X=${event.clientX}, Y=${event.clientY}`;
});

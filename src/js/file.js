document.getElementById("fileInput").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    document.getElementById(
      "fileApiStatus"
    ).textContent = `Archivo seleccionado: ${file.name}, Tipo: ${file.type}, Tamaño: ${file.size} bytes.`;
    document.getElementById("fileApiStatus").style.color = "var(--success)";
  }
});

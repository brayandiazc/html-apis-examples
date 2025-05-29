// Fullscreen
const fullscreenElementToToggle = document.getElementById(
  "fullscreenElementToToggle"
);
const toggleFullscreenBtn = document.getElementById("toggleFullscreenBtn");
if (toggleFullscreenBtn) {
  toggleFullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      fullscreenElementToToggle.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}

// Clipboard
const textToCopyInput = document.getElementById("textToCopy");
const pasteTargetInput = document.getElementById("pasteTarget");
const copyTextBtn = document.getElementById("copyTextBtn");
const pasteTextBtn = document.getElementById("pasteTextBtn");
const clipboardStatus = document.getElementById("clipboardStatus");
if (copyTextBtn) {
  copyTextBtn.addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopyInput.value)
        .then(
          () => (clipboardStatus.textContent = "Texto copiado al portapapeles.")
        )
        .catch(
          (err) => (clipboardStatus.textContent = "Error al copiar: " + err)
        );
    } else {
      textToCopyInput.select();
      document.execCommand("copy");
      clipboardStatus.textContent = "Texto copiado (método fallback).";
    }
  });
}
if (pasteTextBtn) {
  pasteTextBtn.addEventListener("click", () => {
    if (navigator.clipboard && navigator.clipboard.readText) {
      navigator.clipboard
        .readText()
        .then((text) => {
          pasteTargetInput.value = text;
          clipboardStatus.textContent = "Texto pegado desde el portapapeles.";
        })
        .catch(
          (err) => (clipboardStatus.textContent = "Error al pegar: " + err)
        );
    } else {
      clipboardStatus.textContent =
        "API de portapapeles para leer no disponible.";
    }
  });
}

// Drag and Drop
const draggable = document.getElementById("draggableElement");
const dropZone = document.getElementById("dropZone");
const dragDropStatus = document.getElementById("dragDropStatus");
if (draggable && dropZone) {
  draggable.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", "Este elemento fue arrastrado");
    dragDropStatus.textContent = "Arrastrando...";
  });
  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.style.background = "#d1fae5";
  });
  dropZone.addEventListener("dragleave", () => {
    dropZone.style.background = "#f0f0f0";
  });
  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    dragDropStatus.textContent = `Elemento soltado. Contenido: "${data}"`;
    dropZone.textContent = "¡Soltado!";
    dropZone.style.background = "#f0f0f0";
    setTimeout(() => {
      dropZone.textContent = "Soltar aquí";
    }, 2000);
  });
}

// Dialog API
const dialog = document.getElementById("myDialog");
const showDialogBtn = document.getElementById("showDialogBtn");
if (showDialogBtn && dialog) {
  showDialogBtn.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.showModal();
  });
  dialog.addEventListener("click", (event) => {
    if (
      event.target.tagName === "BUTTON" ||
      event.target.classList.contains("close")
    ) {
      dialog.close();
    }
  });
}

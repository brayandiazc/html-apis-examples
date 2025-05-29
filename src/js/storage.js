const storageKeyInput = document.getElementById("storageKey");
const storageValueInput = document.getElementById("storageValue");

document
  .getElementById("saveToLocalStorageBtn")
  .addEventListener("click", () => {
    localStorage.setItem(storageKeyInput.value, storageValueInput.value);
    document.getElementById(
      "storageStatus"
    ).textContent = `Guardado en LocalStorage: ${storageKeyInput.value} = ${storageValueInput.value}`;
  });
document
  .getElementById("loadFromLocalStorageBtn")
  .addEventListener("click", () => {
    const value = localStorage.getItem(storageKeyInput.value);
    document.getElementById(
      "storageStatus"
    ).textContent = `Cargado de LocalStorage: ${storageKeyInput.value} = ${
      value || "no encontrado"
    }`;
  });
document
  .getElementById("saveToSessionStorageBtn")
  .addEventListener("click", () => {
    sessionStorage.setItem(storageKeyInput.value, storageValueInput.value);
    document.getElementById(
      "storageStatus"
    ).textContent = `Guardado en SessionStorage: ${storageKeyInput.value} = ${storageValueInput.value}`;
  });
document
  .getElementById("loadFromSessionStorageBtn")
  .addEventListener("click", () => {
    const value = sessionStorage.getItem(storageKeyInput.value);
    document.getElementById(
      "storageStatus"
    ).textContent = `Cargado de SessionStorage: ${storageKeyInput.value} = ${
      value || "no encontrado"
    }`;
  });
document.getElementById("setCookieBtn").addEventListener("click", () => {
  document.cookie =
    "usuarioDemo=TestUser; path=/; max-age=" +
    60 * 60 * 24 * 7 +
    "; SameSite=Lax";
  document.getElementById("cookieStatus").textContent =
    'Cookie "usuarioDemo" establecida.';
});
document.getElementById("getCookieBtn").addEventListener("click", () => {
  document.getElementById("cookieStatus").textContent = `Cookies actuales: ${
    document.cookie || "(ninguna)"
  }`;
});

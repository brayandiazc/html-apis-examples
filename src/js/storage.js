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

// IndexedDB demo
const idbKeyInput = document.getElementById("idbKey");
const idbValueInput = document.getElementById("idbValue");
const saveToIndexedDBBtn = document.getElementById("saveToIndexedDBBtn");
const loadFromIndexedDBBtn = document.getElementById("loadFromIndexedDBBtn");
const indexedDBStatus = document.getElementById("indexedDBStatus");

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("DemoDB", 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("kv")) {
        db.createObjectStore("kv");
      }
    };
  });
}

if (saveToIndexedDBBtn) {
  saveToIndexedDBBtn.onclick = async () => {
    try {
      const db = await openDB();
      const tx = db.transaction("kv", "readwrite");
      tx.objectStore("kv").put(idbValueInput.value, idbKeyInput.value);
      tx.oncomplete = () => {
        indexedDBStatus.textContent = `Guardado en IndexedDB: ${idbKeyInput.value} = ${idbValueInput.value}`;
        db.close();
      };
      tx.onerror = () => {
        indexedDBStatus.textContent = `Error al guardar: ${tx.error}`;
        db.close();
      };
    } catch (e) {
      indexedDBStatus.textContent = `Error: ${e.message}`;
    }
  };
}
if (loadFromIndexedDBBtn) {
  loadFromIndexedDBBtn.onclick = async () => {
    try {
      const db = await openDB();
      const tx = db.transaction("kv", "readonly");
      const req = tx.objectStore("kv").get(idbKeyInput.value);
      req.onsuccess = () => {
        indexedDBStatus.textContent = `Leído de IndexedDB: ${
          idbKeyInput.value
        } = ${req.result ?? "no encontrado"}`;
        db.close();
      };
      req.onerror = () => {
        indexedDBStatus.textContent = `Error al leer: ${req.error}`;
        db.close();
      };
    } catch (e) {
      indexedDBStatus.textContent = `Error: ${e.message}`;
    }
  };
}

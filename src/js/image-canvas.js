const imageInput = document.getElementById("imageInput");
const invertBtn = document.getElementById("invertBtn");
const grayscaleBtn = document.getElementById("grayscaleBtn");
const brightnessBtn = document.getElementById("brightnessBtn");
const sepiaBtn = document.getElementById("sepiaBtn");
const flipHBtn = document.getElementById("flipHBtn");
const canvas = document.getElementById("imageCanvas");
const ctx = canvas.getContext("2d");
let img = new window.Image();
let imgLoaded = false;

function enableButtons() {
  invertBtn.disabled = false;
  grayscaleBtn.disabled = false;
  brightnessBtn.disabled = false;
  sepiaBtn.disabled = false;
  flipHBtn.disabled = false;
}

imageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (event) {
    img = new window.Image();
    img.onload = function () {
      // Ajustar el canvas al tamaño de la imagen (opcional)
      canvas.width = img.width > 800 ? 800 : img.width;
      canvas.height = img.height > 400 ? 400 : img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      imgLoaded = true;
      enableButtons();
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

invertBtn.addEventListener("click", () => {
  if (!imgLoaded) return;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // R
    data[i + 1] = 255 - data[i + 1]; // G
    data[i + 2] = 255 - data[i + 2]; // B
    // data[i + 3] es alpha
  }
  ctx.putImageData(imageData, 0, 0);
});

grayscaleBtn.addEventListener("click", () => {
  if (!imgLoaded) return;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i + 1] = data[i + 2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
});

brightnessBtn.addEventListener("click", () => {
  if (!imgLoaded) return;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const brillo = 40;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.min(255, data[i] + brillo);
    data[i + 1] = Math.min(255, data[i + 1] + brillo);
    data[i + 2] = Math.min(255, data[i + 2] + brillo);
  }
  ctx.putImageData(imageData, 0, 0);
});

sepiaBtn.addEventListener("click", () => {
  if (!imgLoaded) return;
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2];
    data[i] = Math.min(255, 0.393 * r + 0.769 * g + 0.189 * b);
    data[i + 1] = Math.min(255, 0.349 * r + 0.686 * g + 0.168 * b);
    data[i + 2] = Math.min(255, 0.272 * r + 0.534 * g + 0.131 * b);
  }
  ctx.putImageData(imageData, 0, 0);
});

flipHBtn.addEventListener("click", () => {
  if (!imgLoaded) return;
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.restore();
});

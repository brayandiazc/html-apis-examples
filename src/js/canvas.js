const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const lineWidthRange = document.getElementById("lineWidthRange");
const lineWidthValue = document.getElementById("lineWidthValue");
let drawing = false;
let lastX = 0;
let lastY = 0;

function getCanvasCoords(e) {
  const rect = canvas.getBoundingClientRect();
  return [
    ((e.clientX - rect.left) / rect.width) * canvas.width,
    ((e.clientY - rect.top) / rect.height) * canvas.height,
  ];
}

function startDraw(e) {
  drawing = true;
  [lastX, lastY] = getCanvasCoords(e);
}

function draw(e) {
  if (!drawing) return;
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = parseInt(lineWidthRange.value, 10);
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  const [x, y] = getCanvasCoords(e);
  ctx.lineTo(x, y);
  ctx.stroke();
  [lastX, lastY] = [x, y];
}

function stopDraw() {
  drawing = false;
}

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mouseleave", stopDraw);

lineWidthRange.addEventListener("input", () => {
  lineWidthValue.textContent = lineWidthRange.value;
});

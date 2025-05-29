const startRecBtn = document.getElementById("startRecBtn");
const stopRecBtn = document.getElementById("stopRecBtn");
const audioPlayback = document.getElementById("audioPlayback");
const micStatus = document.getElementById("micStatus");
let mediaRecorder,
  audioChunks = [];

startRecBtn.onclick = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    micStatus.textContent = "API no soportada.";
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];
    mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      audioPlayback.src = URL.createObjectURL(audioBlob);
      audioPlayback.style.display = "block";
      micStatus.textContent = "Grabación lista para reproducir.";
    };
    mediaRecorder.start();
    micStatus.textContent = "Grabando...";
    startRecBtn.disabled = true;
    stopRecBtn.disabled = false;
  } catch (e) {
    micStatus.textContent = "Permiso denegado o error: " + e.message;
  }
};

stopRecBtn.onclick = () => {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
    startRecBtn.disabled = false;
    stopRecBtn.disabled = true;
    micStatus.textContent = "Procesando audio...";
  }
};

const mediaInput = document.getElementById("mediaInput");
const audioPlayer = document.getElementById("audioPlayer");
const videoPlayer = document.getElementById("videoPlayer");
const mediaStatus = document.getElementById("mediaStatus");

mediaInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  if (file.type.startsWith("audio")) {
    audioPlayer.src = url;
    audioPlayer.style.display = "block";
    videoPlayer.style.display = "none";
    mediaStatus.textContent = "Reproduciendo audio.";
  } else if (file.type.startsWith("video")) {
    videoPlayer.src = url;
    videoPlayer.style.display = "block";
    audioPlayer.style.display = "none";
    mediaStatus.textContent = "Reproduciendo video.";
  } else {
    mediaStatus.textContent = "Archivo no soportado.";
  }
});

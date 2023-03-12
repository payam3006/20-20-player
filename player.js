const media = document.getElementById("media");
const play = document.getElementById("play");

function playMedia() {
  if (media.paused) {
    media.play();
  } else {
    media.pause();
  }
}
const stop = () => {
  media.pause();
  media.currentTime = 0;
};

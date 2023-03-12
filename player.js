const media = document.getElementById("media");
const play = document.getElementById("play");
const time = document.getElementById("time");
const range = document.getElementById("range");

range.max = Number(media.duration);
const a = console.log;
a(media.duration);

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

const showMin = () => {
  let min = Math.floor(media.currentTime / 60);
  if (min < 10) {
    return `0${min}`;
  } else {
    return min;
  }
};

function showSecond() {
  let second = Math.floor(media.currentTime % 60);
  if (second < 10) {
    return `0${second}`;
  } else {
    return second;
  }
}

const showTime = () => {
  range.value = Number(media.currentTime);
  time.innerHTML = `${showMin()}:${showSecond()}`;
};

showTime();

setInterval(showTime, 1000);

range.addEventListener("input", function () {
  media.currentTime = Number(range.value);
});

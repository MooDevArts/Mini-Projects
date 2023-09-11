let time = parseInt(prompt("enter value"));
while (isNaN(time)) {
  time = parseInt(prompt("Pls Enter Number"));
}
let sound = new Audio("ring.mp3");
let stopSound = new Audio("stone.mp3");
let timer;
let count = time - 1;
let countTimer;
let playing = false;
let p = document.getElementsByTagName("p");
document.addEventListener("click", function () {
  if (playing == false) {
    startTimer();
  } else {
    stopTimer();
  }
});

function startTimer() {
  navigator.wakeLock.request('screen');
  startCountDown();
  playing = true;
  playSound();
  timer = setInterval(playSound, time * 1000);
}

function startCountDown() {
  p[0].innerHTML = time;
  countTimer = setInterval(showCount, 1000);
}

function showCount() {
  p[0].innerHTML = count;
  count--;
}

function playSound() {
  count = time - 1;
  sound.play();
}

function stopTimer() {
  p[0].innerHTML = "Click to start, Refresh to change time";
  count = time - 1;
  stopSound.play();
  playing = false;
  clearInterval(timer);
  clearInterval(countTimer);
}

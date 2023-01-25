let intervalId;
let counterValue = parseInt(sessionStorage.getItem("lastCounterValue")) || 0;

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const counter = document.getElementById("counter");

const play = function () {
  intervalId = setInterval(increaseCounter, 1000);
  console.log("timer started");
};

const pause = function () {
  clearInterval(intervalId);
  console.log("timer paused");
};

const reset = function () {
  clearInterval(intervalId);
  counterValue = 0;
  assignCounterToDOM();
  console.log("timer reset");
};

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);

const assignCounterToDOM = function () {
  counter.innerText = counterValue;
};
assignCounterToDOM();

const increaseCounter = function () {
  counterValue++;
  assignCounterToDOM();
  sessionStorage.setItem("lastCounterValue", counterValue);
};

window.addEventListener("load", function () {
  assignCounterToDOM();
});

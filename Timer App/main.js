const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const time = document.querySelector("#time");
const ul = document.querySelector("#splits");
const splits = document.getElementsByClassName("split");
let miliseconds = 0;
let startActive = true;
let stopActive = true;
let intervalId;

// Button START functions

const btnStopReset = () => {
  stopActive = !stopActive;
  stopBtn.textContent = "STOP";
  stopBtn.className = "";
};

const startCounting = () => {
  intervalId = setInterval(counter, 10);
  startActive = !startActive;
  startBtn.textContent = "SPLIT";
  if (!stopActive) {
    btnStopReset();
  }
};

const counter = () => {
  miliseconds++;
  time.textContent = (miliseconds / 100).toFixed(2);
};

const createSplit = () => {
  const split = document.createElement("li");
  split.classList.add("split");
  split.textContent = time.textContent;
  ul.appendChild(split);
};

const btnStartClickHandler = () => {
  if (startActive) {
    startCounting();
  } else {
    createSplit();
  }
};

// Button STOP functions

const reset = () => {
  startActive = true;
  stopActive = true;
  time.textContent = "---";
  miliseconds = 0;
  stopBtn.textContent = "STOP";
  stopBtn.className = "";
  [...splits].forEach((item) => item.remove());
};

const stopCounting = () => {
  clearInterval(intervalId);
  stopActive = !stopActive;
  stopBtn.textContent = "RESET";
  stopBtn.className = "reset";
  startActive = !startActive;
  createSplit();
};

const btnStopClickHandler = () => {
  startBtn.textContent = "START";
  if (stopActive & !startActive) {
    stopCounting();
  } else {
    reset();
  }
};

startBtn.addEventListener("click", btnStartClickHandler);
stopBtn.addEventListener("click", btnStopClickHandler);

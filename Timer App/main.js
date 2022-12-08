const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const time = document.querySelector("#time");
const ul = document.querySelector("#splits");
const splits = document.getElementsByClassName("split");
let seconds = 0;
let startActive = true;
let stopActive = true;
let id;

const createSplit = () => {
  const split = document.createElement("li");
  split.classList.add("split");
  split.textContent = time.textContent;
  ul.appendChild(split);
};

const counter = () => {
  seconds++;
  time.textContent = (seconds / 100).toFixed(2);
};

const start = () => {
  if (startActive) {
    id = setInterval(counter, 10);
    startActive = !startActive;
    startBtn.textContent = "SPLIT";
    if (!stopActive) {
      stopActive = !stopActive;
      stopBtn.textContent = "STOP";
      stopBtn.className = "";
    }
  } else {
    createSplit();
  }
};

const stop = () => {
  if (stopActive & !startActive) {
    clearInterval(id);
    stopActive = !stopActive;
    stopBtn.textContent = "RESET";
    stopBtn.className = "reset";
    startActive = !startActive;
    createSplit();
    startBtn.textContent = "START";
  } else {
    startActive = true;
    stopActive = true;
    time.textContent = "---";
    seconds = 0;
    stopBtn.textContent = "STOP";
    stopBtn.className = "";
    startBtn.textContent = "START";
    [...splits].forEach((item) => item.remove());
  }
};
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

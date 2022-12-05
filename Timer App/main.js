const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const time = document.querySelector("#time");
let seconds = 0;
let flag = true;
let id;
const counter = () => {
  seconds++;
  time.textContent = (seconds / 100).toFixed(2);
};

const start = () => {
  if (flag) {
    id = setInterval(counter, 10);
    flag = !flag;
    startBtn.textContent = "PAUSE";
  } else {
    clearInterval(id);
    startBtn.textContent = "START";
    flag = !flag;
  }
};

const stop = () => {
  clearInterval(id);
  seconds = 0;
  startBtn.textContent = "START";
  time.textContent = "---";
  flag = true;
};

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

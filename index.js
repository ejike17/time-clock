const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

const updateClock = () => {
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let ampm = "AM";
  if (hour > 12) {
    hour -= 12;
    hour = "0" + hour;
    ampm = "PM";
  }

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hourEl.innerText = hour;
  ampmEl.innerText = ampm;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
};

setInterval(() => {
  updateClock();
}, 1000);

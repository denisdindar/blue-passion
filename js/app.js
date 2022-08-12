// 1. Countdown for Coming Soon Page
const newYears = "20 August 2022";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minsEL.innerText = minutes;
}

setInterval(countdown, 1000);

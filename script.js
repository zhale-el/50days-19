const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const toggle = document.querySelector(".toggle");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// < ====== Dark mode ====== >
toggle.addEventListener("click", (event) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    event.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    event.target.innerHTML = "Light Mode";
  }
});

// setTime

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // time
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  // Date
  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]}
  <span class='circle'>${date}</span>`;
}

setTime();

setInterval(setTime, 1000);

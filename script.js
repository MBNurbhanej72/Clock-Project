let clock = document.getElementById("clock");

let currentTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  // Add leading zeros to minutes and seconds if they are less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  clock.innerText = currTime;
};

setInterval(() => {
  currentTime();
}, 1000);

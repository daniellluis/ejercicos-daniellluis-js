"use strict";

const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "iniciar";
button.style.backgroundColor = "yellow";
body.appendChild(button);

const button2 = document.createElement("button");
button2.textContent = "Parar";
button2.style.backgroundColor = "yellow";
body.appendChild(button2);

const button3 = document.createElement("button");
button3.textContent = "reset";
button3.style.backgroundColor = "yellow";
body.appendChild(button3);

const reloj = document.createElement("div");
body.appendChild(reloj);
reloj.innerText = "00:00:00:00";
reloj.style.fontSize = "30px";

function format(number) {
  return number > 9 ? `${number}` : `0${number}`;
}
let mS = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;

function clickHandler() {
  const dTimeout = setInterval(() => {
    mS = mS + 1;
    if (mS === 100) {
      mS = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }
    if (hour === 60) {
      hour = 0;
    }

    reloj.innerText = `${format(hour)}:${format(minutes)}:${format(
      seconds
    )}:${format(mS)}`;
  }, 10);

  function stop() {
    clearInterval(dTimeout);
    button.addEventListener("click", clickHandler);
  }

  button2.addEventListener("click", stop);

  function reset() {
    clearInterval(dTimeout);
    reloj.innerText = "00:00:00:00";
    button.addEventListener("click", clickHandler);
    mS = 0;
    seconds = 0;
    minutes = 0;
    hour = 0;
  }

  button3.addEventListener("click", reset);
  button.removeEventListener("click", clickHandler);
}

button.addEventListener("click", clickHandler);

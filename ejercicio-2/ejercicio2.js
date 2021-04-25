/*# Ejercicio 2

Crea un . Formatea el tiempo para que
 se muestren los segundos, los minutos, las horas y los días desde la ejecución.*/
"use strict";

let seconds = 0;
let minutes = 0;
let hour = 0;
let days = 0;

function format(number) {
  return number > 9 ? `${number}` : `0${number}`;
}

const dTimeout = setInterval(() => {
  seconds = seconds + 5;
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
    days++;
  }

  console.log(
    `Tiempo desde la ejecucion :${format(days)}:${format(hour)}:${format(
      minutes
    )}:${format(seconds)}`
  );
}, 5000);

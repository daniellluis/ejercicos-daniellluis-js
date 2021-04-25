"use strict";

const body = document.querySelector("body");

const button = document.createElement("button");
button.textContent = "crear cuadrado";
button.style.backgroundColor = "#FABADA";
button.style.marginBottom = "10px";
button.style.display = "block";
body.appendChild(button);

const main = document.createElement("main");

main.style.width = "400px";
main.style.display = "flex";
main.style.flexWrap = "wrap";
body.appendChild(main);

button.addEventListener("click", crear);

function crear() {
  const div = document.createElement("div");
  div.style.height = "100px";
  div.style.width = "100px";
  main.appendChild(div);

  setInterval(() => {
    div.style.backgroundColor = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
  }, 1000);
  // 9;
}

crear();

/*# Ejercicio 6

Subraya (manipulando el DOM) todas las palabras de los párrafos
 en "ejercicio.html" que contengan más de 5 letras.*/
"use strict";

const texto = document.getElementsByTagName("p");

for (let i = 0; i < texto.length; i++) {
  let texto2 = texto[i].innerHTML;
  const parrafo2 = texto2.replace(/[.,\/#!$%\n\*;:"=\-_`~()]/g, "").split(" ");
  for (let palabra of parrafo2) {
    if (palabra.length > 5) {
      texto2 = texto2.split(palabra).join(`<u>${palabra}</u>`);
      texto[i].innerHTML = texto2;
    }
  }
}
const etiqueta = document.getElementsByTagName("u");
for (let i = 0; i < etiqueta.length; i++) {
  etiqueta[i].style.color = "blue";
}

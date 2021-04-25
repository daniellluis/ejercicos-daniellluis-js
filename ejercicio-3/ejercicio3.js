"use strict";

/*
# Ejercicio 3

Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

-   Si le pasamos un nº en decimal debe retornar la conversión a binario.

-   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

No se permite utilizar el método parseInt(). */

function conversor(numero, base) {
  if (base === 10) {
    let valor = 0;
    let conversor = numero.toString().split("").reverse().join("");
    for (let i = 0; i < conversor.length; i++) {
      valor = valor + conversor[i] * 2 ** i;
    }
    return valor;
  } else if (base === 2) {
    return +numero.toString(base);
  }
}
console.log(conversor(10011, 10));
console.log(conversor(18, 2));

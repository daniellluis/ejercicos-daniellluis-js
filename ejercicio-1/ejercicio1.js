"use strict";
/*
# Ejercicio 1

Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/ */

async function users(amount) {
  const url = `https://randomuser.me/api/?results=${amount}`;
  const newPersons = [];
  const persons = (await (await fetch(url)).json()).results;

  for (const person of persons) {
    const users = {
      username: person.login.username,
      name: person.name.first,
      lasName: person.name.last,
      gender: person.gender,
      country: person.location.country,
      email: person.email,
      picture: person.picture.large,
    };
    newPersons.push(users);
  }
  console.log(newPersons);
}

users(5);

"use strict";
/*
# Ejercicio 1

Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.

El número de usuarios a obtener se debe indicar con un parámetro de dicha función.

Sírvete de la API: https://randomuser.me/ */

// async function usuarios(amount) {
//   const url = `https://randomuser.me/api/?results=${amount}`;
//   const response = await fetch(url);
//   const data = await response.json();

//   // console.log(data);
//   const usariosDatos = [];

//   for (let i = 0; i < data.results.length; i++) {
//     const userComplet = new Object();
//     userComplet.nameFirst = data.results.map((user) => user.name.first)[i];
//     userComplet.nameLast = data.results.map((user) => user.name.last)[i];
//     userComplet.gender = data.results.map((user) => user.gender)[i];
//     userComplet.userName = data.results.map((user) => user.login.username)[i];
//     userComplet.location = data.results.map((user) => user.location.country)[i];
//     userComplet.picture = data.results.map((user) => user.picture.large)[i];
//     userComplet.email = data.results.map((user) => user.email)[i];
//     usariosDatos.push(userComplet);
//   }
//   console.log(usariosDatos);
// }

// usuarios(5);

// async function randomUser(numero) {
//   const url = `https://randomuser.me/api?results=${numero}`;
//   const data = await fetch(url);
//   const response = await data.json();
//   let users = [];
//   for (const propiedad of response.results) {
//     users.push(
//       `username: ${propiedad.login.username}, name: ${propiedad.name.first}, lastName: ${propiedad.name.last}, gender: ${propiedad.gender}, country: ${propiedad.location.country}, email: ${propiedad.email}, photo: ${propiedad.picture.large}`
//     );
//   }
//   return users;
// }
// randomUser(7).then((valor) => console.log(valor));

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

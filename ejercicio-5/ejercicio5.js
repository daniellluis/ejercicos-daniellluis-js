"use strict";

/*
# Ejercicio 5

Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen en los episodios lanzados en el mes de enero (el año no importa).

Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'
*/

const url = "https://rickandmortyapi.com/api/";

async function personajes(url) {
  const response = await fetch(url);
  const data = await response.json();

  const episodes = await fetch(data.episodes);
  const dataEpisodes = await episodes.json();

  const dataJanuary = dataEpisodes.results
    .filter((january) => january.air_date.split(" ").includes("January"))
    .map((item) => item.characters);

  const characters = [...dataJanuary[0], ...dataJanuary[1], ...dataJanuary[2]];

  const personajes = [];
  for (let character of characters) {
    const personCharacter = await fetch(character);
    const dataPersonaje = await personCharacter.json();
    personajes.push(dataPersonaje.name);
  }

  console.log(personajes);
}
personajes(url);

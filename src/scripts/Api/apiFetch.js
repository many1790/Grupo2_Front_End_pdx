/*
import {mainScreen, NumberPK, weigthDiv, heightDiv, typeDiv1, secondScreen} from "../main2.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function getData() {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/25');
  
      if (!res.ok) {
        throw new Error("Error: " + res.status);
      }
  
      const data = await res.json();
      console.log(data);
      return data;
  
    } catch (error) {
      console.error("Hubo un problema:", error.message);
    }
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////////
export function pintarPokemon(data) {
  mainScreen.innerHTML = `
    <img  class="imgPK"src="${data.sprites.front_default}" alt="${data.name}">
    <h2 class="namePK">${data.name.toUpperCase()}</h2>`,
  NumberPK.innerHTML=`<p>Nº:${data.id}</p>`,
  weigthDiv.innerHTML=`<p>${data.weight}</p>`,
  heightDiv.innerHTML=`<p>${data.height}</p>`,
  typeDiv1.innerHTML= `<p>${data.types.map(t => t.type.name).join(", ")}</p>`;
}

export async function showMe() {
  const data = await getData();
  if (data) {
    pintarPokemon(data);
  }
}
*/
/*


const gridContainer = document.querySelector("#pokemonGrid");

let selectedCard = null;

// Crear card para grid
export function createCardGrid(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");
  card.innerHTML = `
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" width="80">
      <p>${pokemon.name.toUpperCase()}</p>
  `;

  card.addEventListener("click", () => {
      // Resalta la card seleccionada
      if (selectedCard) selectedCard.classList.remove("selected");
      card.classList.add("selected");
      selectedCard = card;

      // Mostrar detalle
      showDetail(pokemon);
  });

  gridContainer.appendChild(card);
}

// Mostrar detalle en tus divs y descripción
export function showDetail(pokemon) {
  // Info principal
  mainScreen.innerHTML = `
      <img class="imgPK" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2 class="namePK">${pokemon.name.toUpperCase()}</h2>
  `;
  NumberPK.innerHTML = `<p>Nº: ${pokemon.id}</p>`;
  weigthDiv.innerHTML = `<p>${pokemon.weight}</p>`;
  heightDiv.innerHTML = `<p>${pokemon.height}</p>`;
  typeDiv1.innerHTML = `<p>${pokemon.types.map(t => t.type.name).join(", ")}</p>`;

  // Descripción en pdxScreen2
  const desc = pokemon.species?.flavor_text_entries?.find(e => e.language.name === "en")?.flavor_text 
               || pokemon.description || "No description available";
  secondScreen.innerHTML = `<p>${desc}</p>`;
}

// Cargar y mostrar grid completo
export async function showAllPokemonsGrid(limit = 20) {
  try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await res.json();

      gridContainer.innerHTML = ""; // limpiar grid

      for (const p of data.results) {
          const pokeRes = await fetch(p.url);
          const pokeData = await pokeRes.json();

          // Necesitamos también la descripción
          const speciesRes = await fetch(pokeData.species.url);
          const speciesData = await speciesRes.json();
          pokeData.species = speciesData;

          createCardGrid(pokeData);
      }
  } catch (error) {
      console.error("Error cargando Pokémon:", error);
  }
}
*/





import { heightDiv, mainScreen, NumberPK, typeDiv1, weigthDiv, secondScreen, gridContainer, auxScreen,typeDiv0 } from '../main2.js';

let selectedCard = null;

// Crear card para grid
export function createCardGrid(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" width="80">
        <p>${pokemon.name.toUpperCase()}</p>
    `;

    card.addEventListener("click", () => {
      typeDiv0.style.display="none";
        showDetail(pokemon);
    });

    gridContainer.appendChild(card);
}

// Mostrar detalle en los divs laterales
export function showDetail(pokemon) {
  auxScreen.style.display="block";
    auxScreen.innerHTML = `
        <img class="imgPK" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2 class="namePK">${pokemon.name.toUpperCase()}</h2>
    `;
    NumberPK.innerHTML = `<p>Nº: ${pokemon.id}</p>`;
    weigthDiv.innerHTML = `<p>${pokemon.weight}</p>`;
    heightDiv.innerHTML = `<p>${pokemon.height}</p>`;
    typeDiv1.innerHTML = `<p>${pokemon.types.map(t => t.type.name).join(", ")}</p>`;

    const desc = pokemon.species?.flavor_text_entries?.find(e => e.language.name === "en")?.flavor_text
                 || pokemon.description || "No description available";
    secondScreen.innerHTML = `<p>${desc}</p>`;

    auxScreen.addEventListener("click", () => {
      auxScreen.style.display="none";
      NumberPK.innerHTML = "";
      weigthDiv.innerHTML ="";
      heightDiv.innerHTML ="";
      typeDiv1.innerHTML = "";
      secondScreen.innerHTML ="";
        typeDiv0.style.display="block";
    });
}

// Cargar y mostrar grid completo
export async function showAllPokemonsGrid(limit = 26) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await res.json();

        gridContainer.innerHTML = "";

        for (const p of data.results) {
            const pokeRes = await fetch(p.url);
            const pokeData = await pokeRes.json();

            const speciesRes = await fetch(pokeData.species.url);
            const speciesData = await speciesRes.json();
            pokeData.species = speciesData;

            createCardGrid(pokeData);
        }

    } catch (error) {
        console.error("Error cargando Pokémon:", error);
    }
}

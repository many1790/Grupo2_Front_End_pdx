import { API_URL, createCardGrid } from "./editPokemon";
import { Dom } from "../dom/domElements.js";

export async function showAllPokemonsGrid() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const pokemonList = data.data;

    Dom.gridContainer.innerHTML = "";

    pokemonList.forEach((pokemon) => {
      createCardGrid(pokemon);
    });
  } catch (error) {
    console.error("Error cargando Pokémon desde tu API local:", error);
  }
}

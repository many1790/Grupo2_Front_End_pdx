import "../styles/style-index3.scss";
import { editPokemon, getSprite } from "./events/editPokemonFetch.js";
import { deletePoke } from "./Api/deletePokemonFetch.js";
import { Dom } from "./dom/domElements.js";

export const mainScreen = document.querySelector("#cubo");
export const typeDiv = document.querySelector("#typeDiv");
export const weightDiv = document.querySelector("#weightDiv");
export const heightDiv = document.querySelector("#heightDiv");
export const statsDiv = document.querySelector("#statsDiv");
export const movesDiv = document.querySelector("#movesDiv");
export const descriptionDiv = document.querySelector("#descriptionDiv");
export const nav = document.querySelector("#nav");
const storedUser = JSON.parse(localStorage.getItem("pdx_user"));

if (!storedUser || storedUser.mode !== "pokemon") {
  alert("No estás logueado como Pokémon");
  window.location.href = "/index0.html";
}

Dom.outBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index1.html";
});

const pokeID = storedUser.pokeID;

export async function fetchPokemonDetails(id) {
  try {
    const res = await fetch(`http://localhost:3000/pokemon/${id}`);
    const json = await res.json();

    if (!res.ok || !json.data) {
      throw new Error("No se pudo cargar el Pokémon");
    }

    return json.data;
  } catch (error) {
    console.log("Error fetching Pokémon:", error);
    alert("No se pudo cargar el Pokémon");
  }
}

export function renderPokemon(pokemon) {
  const sprite = getSprite(pokemon.pokeID);
  mainScreen.innerHTML = `
    <img class="imgPoke" src="${sprite}" alt="${pokemon.pokeName}" />
    <h2 class="namePoke">${pokemon.pokeName.toUpperCase()}</h2>
    <p class="numberPoke">Nº: ${pokemon.pokeID}</p>
  `;

  typeDiv.innerHTML = `<p>Type: ${pokemon.pokeOverview.types.join(", ")}</p>`;

  weightDiv.innerHTML = `<p>Peso: ${pokemon.pokeOverview.weight}</p>`;
  heightDiv.innerHTML = `<p>Altura: ${pokemon.pokeOverview.height}</p>`;

  descriptionDiv.innerHTML = `<p>${pokemon.pokeOverview.description}</p>`;

  statsDiv.innerHTML = "<h3>Estadísticas</h3>";
  const statsList = document.createElement("div");
  statsList.id = "statsDiv_conteiner";
  pokemon.pokeOverview.stats.forEach((stat) => {
    const li = document.createElement("div");
    li.className = "statsLi";
    li.textContent = `${stat.name}: ${stat.base}`;
    statsList.appendChild(li);
  });
  statsDiv.appendChild(statsList);

  movesDiv.innerHTML = "<h3>Movimientos</h3>";
  const movesList = document.createElement("div");
  movesList.className = "divMoves";
  pokemon.pokeOverview.moves.forEach((move) => {
    const li = document.createElement("p");
    li.textContent = move;
    movesList.appendChild(li);
  });
  movesDiv.appendChild(movesList);
}

window.addEventListener("DOMContentLoaded", async () => {
  const pokemonData = await fetchPokemonDetails(pokeID);
  if (pokemonData) {
    renderPokemon(pokemonData);
  }
});
document.getElementById("editButton").addEventListener("click", () => {
  editPokemon(pokeID);
});

let pokemonToDelete = null;

function eventListenerForDeletePoke() {
  document.querySelector("#deleteBtn").addEventListener("click", () => {
    if (!pokeID) {
      alert("No hay Pokémon seleccionado.");
      return;
    }

    pokemonToDelete = pokeID;
    document.querySelector("#deleteModal").classList.remove("hidden");
  });

  document.querySelector("#cancelDeleteBtn").addEventListener("click", () => {
    document.querySelector("#deleteModal").classList.add("hidden");
    pokemonToDelete = null;
  });

  document.querySelector("#confirmDeleteBtn").addEventListener("click", () => {
    if (!pokemonToDelete) return;

    deletePoke(pokemonToDelete, "index3");
  });
}

eventListenerForDeletePoke();

import{heightDiv, mainScreen, NumberPK, typeDiv1, weigthDiv,typeDiv0}from '../main2.js'

export async function getData() {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
  
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



  
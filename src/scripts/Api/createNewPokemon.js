import { apiConfig } from "./apiConfig";

export async function createNewPokemonFetch(formGatherData) {
  try {
    const response = await fetch(apiConfig.pokemon, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formGatherData),
    });
    if (!response.ok) throw new Error("Error while creating a new pokemon");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

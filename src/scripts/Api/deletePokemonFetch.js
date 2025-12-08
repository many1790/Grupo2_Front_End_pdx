import { Dom } from "../dom/domElements.js";
import { apiConfig } from "./apiConfig.js";

export async function deletePoke(pokeID, source) {
  try {
    const response = await fetch(`${apiConfig.pokemon}${pokeID}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok)
      throw new Error("hubo un problema al eliminar el pokemon");
    Dom.deleteModal.classList.add("hidden");
    if (source === "index2") {
      return window.location.reload();
    }
    if (source === "index3") {
      return (window.location.href = "index.html");
    }
  } catch (error) {
    console.log(error);
  }
}

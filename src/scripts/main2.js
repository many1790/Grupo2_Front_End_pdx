import { showAllPokemonsGrid } from "./events/showAll.js";
import "../styles/style-Index2.scss";
import { eventsForNewUserForm } from "./events/createPokemon.js";
import { Dom } from "./dom/domElements.js";
import { eventListenerForDelete } from "./events/deletePokemon.js";
import { teamToggleListener } from "./events/teamToggleListener.js";

showAllPokemonsGrid();

document.addEventListener("DOMContentLoaded", () => {
  eventListenerForDelete();
  teamToggleListener();
});

Dom.outBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "index1.html";
});

Dom.createButton.addEventListener("click", () => {
  Dom.gridContainer.style.display = "none";
  setNewUserForm();
});

Dom.typeDiv2.addEventListener("click", () => {
  const pokemon = JSON.parse(localStorage.getItem("Selected-Pokemon"));
  setModifyUserForm(pokemon);
});

export function setNewUserForm() {
  if (document.querySelector("#inputPokeName")) return;

  const newUserDiv = document.createElement("div");
  newUserDiv.id = "newUserDiv";
  const inputPokeName = document.createElement("input");
  inputPokeName.id = "inputPokeName";
  inputPokeName.required = true;
  inputPokeName.placeholder = "Nombre";

  const inputDescription = document.createElement("textarea");
  inputDescription.id = "inputDescription";
  inputDescription.required = true;
  inputDescription.placeholder = "Description:";

  const inputWeight = document.createElement("input");
  inputWeight.id = "inputWeight";
  inputWeight.type = "number";
  inputWeight.required = true;

  const inputHeight = document.createElement("input");
  inputHeight.id = "inputHeight";
  inputHeight.type = "number";
  inputHeight.required = true;

  const inputPokeType = document.createElement("input");
  inputPokeType.id = "inputPokeType";
  inputPokeType.required = true;
  inputPokeType.placeholder = "Type:";

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Can";
  cancelButton.id = "btnCancel";

  const saveButton = document.createElement("button");
  saveButton.id = "btnSave";
  saveButton.type = "submit";
  saveButton.textContent = "Sav";

  Dom.asideRight.append(
    inputDescription,
    inputWeight,
    inputHeight,
    inputPokeType,
    cancelButton,
    saveButton
  );
  Dom.asideLeft.appendChild(inputPokeName);

  eventsForNewUserForm({
    cancelButton,
    saveButton,
    inputPokeName,
    inputDescription,
    inputWeight,
    inputHeight,
    inputPokeType,
  });
}

export function showDetailButtons() {
  Dom.toggleTeamBtn.classList = "team-btn";
  Dom.deleteButton.classList = "btn-delete";
}

export function hideDetailButtons() {
  Dom.toggleTeamBtn.classList = "team-btnView";
  Dom.deleteButton.classList = "btn-deleteView";
}

hideDetailButtons();

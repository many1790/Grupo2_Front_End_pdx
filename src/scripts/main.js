import "../styles/style-Index1.scss";
import { listenerLogin } from "./events/loginListener.js";

export const anchorElement = document.querySelector("#app");
export const Formulario = document.querySelector("#Formulario");
export const CUENTA = document.querySelector("#CUENTA");
export const CLAVE = document.querySelector("#CLAVE");
export const BOTONSUBMIT = document.querySelector("#BOTONSUBMIT");

listenerLogin(Formulario, CUENTA, CLAVE);

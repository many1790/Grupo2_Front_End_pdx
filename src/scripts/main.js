import '../styles/style-Index1.scss';
import { listenerLogin } from './events/loginListener.js';


//GET INDEX STATIC ELEMENTS
//MAIN DIV
export const anchorElement = document.querySelector('#app');
//FORM
export const Formulario = document.querySelector('#Formulario');
//INPUT TEXT
export const CUENTA = document.querySelector('#CUENTA');
//INPUT PASSWORD
export const CLAVE = document.querySelector('#CLAVE');
//BUTTON SUBMIT
export const BOTONSUBMIT = document.querySelector('#BOTONSUBMIT');

//Start listener and catch inputs
listenerLogin(Formulario,CUENTA,CLAVE)

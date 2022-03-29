import {Cargo} from './componentes.js'
//instaciamos cargo
const serCargo = new Cargo();
const d = document
const $formCargo=d.getElementById("form-cargo")
d.addEventListener("DOMContentLoaded",serCargo.obtenerCargos())

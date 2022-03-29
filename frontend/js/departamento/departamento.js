import { Departamento } from "./componentesDe.js";
//instaciamos 
const serDepartamento = new Departamento();
const d = document;
const $formDepartamento = d.getElementById("form-Departamento");
d.addEventListener("DOMContentLoaded", serDepartamento.obtenerDepartamentos());
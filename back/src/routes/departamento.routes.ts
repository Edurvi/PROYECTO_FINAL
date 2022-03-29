//importamos router
import { Router } from "express";
import { createDepartamento, deleteDepartamento, getDepartamentoid, getDepartamentos, updateDepartamento } from "../controllers/departamento.controller";
//import { connect } from "../database";

const routercnt1 = Router(); // Instaciamos router-routeador


routercnt1.route("/")
    .get(getDepartamentos)
    .post(createDepartamento)
// obter cargo por su id
routercnt1.route("/:departamentoId")
    .get(getDepartamentoid)
    .delete(deleteDepartamento)
    .put(updateDepartamento)

  
export default routercnt1;

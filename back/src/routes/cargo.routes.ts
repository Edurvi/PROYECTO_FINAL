//importamos router
import { Router } from "express";
import { getCargos,createCargo, getCargoid, deleteCargo, updateCargo } from "../controllers/cargo.controller";
//import { connect } from "../database";

const routercnt = Router(); // Instaciamos router-routeador
//rutas del servidor que siempre se ejecutan por get
routercnt.route("/")
  .get(getCargos)
  .post(createCargo);
//rutas de cargo por su id
routercnt.route("/:cargoId")
  .get(getCargoid)
  .delete(deleteCargo)
  .put(updateCargo);


  
export default routercnt

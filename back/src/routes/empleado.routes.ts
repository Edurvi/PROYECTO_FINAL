//importamos router
import { Router } from "express";
import { getEmpleados } from "../controllers/empleado.controller";
//import { connect } from "../database";

const routercnt2 = Router(); // Instaciamos router-routeador



routercnt2.route("/")
  .get(getEmpleados);

export default routercnt2;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos router
const express_1 = require("express");
const empleado_controller_1 = require("../controllers/empleado.controller");
//import { connect } from "../database";
const routercnt2 = (0, express_1.Router)(); // Instaciamos router-routeador
routercnt2.route("/")
    .get(empleado_controller_1.getEmpleados);
exports.default = routercnt2;

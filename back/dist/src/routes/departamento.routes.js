"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos router
const express_1 = require("express");
const departamento_controller_1 = require("../controllers/departamento.controller");
//import { connect } from "../database";
const routercnt1 = (0, express_1.Router)(); // Instaciamos router-routeador
routercnt1.route("/")
    .get(departamento_controller_1.getDepartamentos);
exports.default = routercnt1;

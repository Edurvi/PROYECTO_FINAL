"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos router
const express_1 = require("express");
const cargo_controller_1 = require("../controllers/cargo.controller");
//import { connect } from "../database";
const routercnt = (0, express_1.Router)(); // Instaciamos router-routeador
//rutas del servidor que siempre se ejecutan por get
routercnt.route("/")
    .get(cargo_controller_1.getCargos);
exports.default = routercnt;

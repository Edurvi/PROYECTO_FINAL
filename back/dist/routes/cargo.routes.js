"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importamos router
const express_1 = require("express");
const cargo_controller_1 = require("../controllers/cargo.controller");
//import { connect } from "../database";
const routercnt = (0, express_1.Router)(); // Instaciamos router-routeador
//rutas del servidor que siempre se ejecutan por get
routercnt.route("/")
    .get(cargo_controller_1.getCargos)
    .post(cargo_controller_1.createCargo);
//rutas de cargo por su id
routercnt.route("/:cargoId")
    .get(cargo_controller_1.getCargoid)
    .delete(cargo_controller_1.deleteCargo)
    .put(cargo_controller_1.updateCargo);
exports.default = routercnt;

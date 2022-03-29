"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCargo = exports.deleteCargo = exports.getCargoid = exports.createCargo = exports.getCargos = void 0;
const database_1 = require("../bd/database");
const conection = new database_1.Coneccion();
//controlador de get cargos(funcion o logica de la peticion)
function getCargos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connBD = yield conection.getConneccion(); //la llamamos
            const cargos = yield connBD.query("SELECT * FROM cargo");
            return res.json(cargos[0]); //los datos propios de la tabla vienen en la pos 0
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getCargos = getCargos;
;
//?CREACION DE UN CARGO
//esta funcion va tener que traer datos del servidor
function createCargo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modCargo = req.body;
            console.log(modCargo); //en el boy viaja la informacion
            const connBD = yield conection.getConneccion(); //la llamamos
            const cargos = yield connBD.query("INSERT INTO cargo SET ?", [modCargo]); //el ? significa que vamos aponer el nombre de los campos
            res.json({ msg: "Cargo Insertado correctamente", cargos: modCargo }); // presentamos lo que pusimos
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createCargo = createCargo;
//?OBTENER UN CARGO MEDIANTE SU ID
function getCargoid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.cargoId;
        const connBD = yield conection.getConneccion();
        const cargo = yield connBD.query("Select * FROM cargo WHERE id = ?", [id]);
        res.json(cargo[0]);
    });
}
exports.getCargoid = getCargoid;
//?ELIMINAR UN CARGO 
function deleteCargo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.cargoId;
        console.log(req.params);
        const connBD = yield conection.getConneccion();
        yield connBD.query("DELETE FROM cargo WHERE id = ?", [id]);
        res.json({
            message: "Cargo Eliminado",
            id,
        });
    });
}
exports.deleteCargo = deleteCargo;
//?ACTUALIZAR UN CARGO
function updateCargo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.cargoId;
        const modCargo = req.body;
        const connBD = yield conection.getConneccion();
        yield connBD.query("UPDATE  cargo set ? WHERE id=?", [modCargo, id]);
        res.json({
            message: "Cargo Actualizado",
            modCargo,
        });
    });
}
exports.updateCargo = updateCargo;

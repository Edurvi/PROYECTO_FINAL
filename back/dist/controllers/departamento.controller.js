"use strict";
// Aquie es donde va toda la logica
// la funcion va a obtener todos los cargos que estan en cargo.routes
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
exports.updateDepartamento = exports.deleteDepartamento = exports.getDepartamentoid = exports.createDepartamento = exports.getDepartamentos = void 0;
const database_1 = require("../bd/database");
//controlador de get cargos(funcion o logica de la peticion)
const conection = new database_1.Coneccion();
//controlador de get cargos(funcion o logica de la peticion)
function getDepartamentos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connBD = yield conection.getConneccion(); //la llamamos
            const departamentos = yield connBD.query("SELECT * FROM departamento");
            return res.json(departamentos[0]); //los datos propios de la tabla vienen en la pos 0
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getDepartamentos = getDepartamentos;
;
//Crear departamento
function createDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const modDepartamento = req.body;
            console.log(modDepartamento); //en el boy viaja la informacion
            const connBD = yield conection.getConneccion(); //la llamamos
            const departamentos = yield connBD.query("INSERT INTO departamento SET ?", [modDepartamento]); //el ? significa que vamos aponer el nombre de los campos
            res.json({ msg: "Departamento Insertado correctamente", cargos: modDepartamento }); // presentamos lo que pusimos
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.createDepartamento = createDepartamento;
//?OBTENER UN DEPARTAMENTO MEDIANTE SU ID
function getDepartamentoid(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.departamentoId;
        const connBD = yield conection.getConneccion();
        const departamento = yield connBD.query("Select * FROM departamento WHERE id = ?", [id]);
        res.json(departamento[0]);
    });
}
exports.getDepartamentoid = getDepartamentoid;
//?ELIMINAR UN Departamento 
function deleteDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.departamentoId;
        console.log(req.params);
        const connBD = yield conection.getConneccion();
        yield connBD.query("DELETE FROM departamento WHERE id = ?", [id]);
        res.json({
            message: "Departamento Eliminado",
            id,
        });
    });
}
exports.deleteDepartamento = deleteDepartamento;
//?ACTUALIZAR UN Departamento
function updateDepartamento(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.departamentoId;
        const modDepartamento = req.body;
        const connBD = yield conection.getConneccion();
        yield connBD.query("UPDATE  departamento set ? WHERE id=?", [modDepartamento, id]);
        res.json({
            message: "Departamento Actualizado",
            modDepartamento,
        });
    });
}
exports.updateDepartamento = updateDepartamento;
// export async function getDepartamentos  (req: Request, res: Response): Promise<Response|void>{ 
//   try {
//       const connBD = await connect(); //nos conectamos a la base de datos con el metodo connect
//       const departamentos = await connBD.query("SELECT * FROM departamento");
//       return res.json(departamentos[0]); //los datos propios de la tabla vienen en la pos 0
//   } catch (err) {
//     console.log(err);
//   }
// };

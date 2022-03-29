"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importar el objeto express del archivo express
const express_1 = __importStar(require("express")); //lo importamos por default
const database_1 = require("./database"); //importamos de database
const morgan_1 = __importDefault(require("morgan"));
//Servidor con express (expres es un framework que trabaja como servidor para nodes)
const app = (0, express_1.default)(); //const el nombre que yo quiera y la variable que pusimos en el import y instaciamos el objeto
app.use((0, morgan_1.default)("dev")); //Es un middleware de nivel de solicitud HTTP MUESTRA INFORMACION
app.use(express_1.default.json()); //es un middleware que se jecutan como hilo , sirve para presentar a json
//rutas del servidor que siempre se ejecutan por get
const routercnt = (0, express_1.Router)(); // creamos un objeto router de la clase router
routercnt.route("/").get((req, res) => {
    res.send("Bienvenidos Guapos a mi pagina principal");
});
app.use("/inicio", routercnt);
// app.get("/", (req:Request, res:Response) => {
//     res.send("Pagina principal") //en el parametro res escogere su metodo send
// })
//?Cargos
app.get("/cargo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.json("Cargos de la empresa"); //en el parametro res escogere su metodo json
    const connBD = yield (0, database_1.connect)(); //nos conectamos a la base de datos con el metodo connect
    const cargos = yield connBD.query("SELECT * FROM cargo");
    res.json(cargos[0]); //los datos propios de la tabla vienen en la pos 0
}));
//?Departamento
app.get("/departamento", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.json("Departamentos de la empresa"); //en el parametro res escogere su metodo json
    const connBD = yield (0, database_1.connect)();
    const departamentos = yield connBD.query("SELECT * FROM departamento");
    res.json(departamentos[0]);
}));
//?Empleado
app.get("/empleado", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.json("Empleados de la empresa"); //en el parametro res escogere su metodo json
    const connBD = yield (0, database_1.connect)();
    const empleados = yield connBD.query("SELECT * FROM empleado");
    res.json(empleados[0]);
}));
//ejecutar el servidor para saber que esta correcto
app.listen(3000, () => {
    console.log("Servidor ejecutandose en el puerto 3000");
}); //listen es el metodo que permite que ejecute el servidor en un puerto y le añadimos una funcion con un mensaje

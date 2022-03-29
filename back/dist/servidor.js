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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cargo_routes_1 = __importDefault(require("./routes/cargo.routes"));
const departamento_routes_1 = __importDefault(require("./routes/departamento.routes"));
const empleado_routes_1 = __importDefault(require("./routes/empleado.routes"));
//se importa con una clase cuaqluiera en este caso (app) y en vez de extendes va implements
class App {
    constructor(port = 3000) {
        this.port = port;
        this.app = (0, express_1.default)(); //se crea el servidor de express en app
        this._portDefault = port;
        this.settings();
        this.middlewares();
        this.routes();
    }
    //puerto
    settings() {
        //si esto tiene un valor se asigna o escoge uno propio que genera
        this.app.set("port", this._portDefault || process.env.PORT);
    }
    middlewares() {
        this.app.use((0, morgan_1.default)("dev")); //muestra x consola mensajes en desarrollo
        //recibir datos del formulario como json
        this.app.use(express_1.default.urlencoded({ extended: true }));
        //recibe datos como json (no de formularios)
        this.app.use(express_1.default.json({ type: "*/*" })); //mas estandar
        // this.app.use(cors()); //conectarse al back end con el front end
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("Bienvenidos Guapos a mi app");
        });
        this.app.use("/cargo", cargo_routes_1.default);
        this.app.use("/departamento", departamento_routes_1.default); //departamento
        this.app.use("/empleado", empleado_routes_1.default); //empleado
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get("port")); //para que se ejecute en el púerto
            console.log(`Server on port => ${this.app.get("port")}`); //presentar en consola
        });
    }
}
exports.App = App;

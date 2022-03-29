
import express, {Request,Response, Application } from 'express'
import morgan from 'morgan';
import {IApp} from '../interface/Iservidor' //importamos la interface y la heredamos
import routercnt from '../routes/cargo.routes';
import routercnt1 from '../routes/departamento.routes';
import routercnt2 from '../routes/empleado.routes';
import router from '../routes/principal.routes';

//se importa con una clase cuaqluiera en este caso (app) y en vez de extendes va implements
export class App implements IApp {
  public app: Application; //variable publica
  private _portDefault: number; //puerto privado 
  constructor(private port: number = 3000) {
    this.app = express(); //se crea el servidor de express en app
    this._portDefault = port;
    this.settings()
    this.middlewares()
    this.routes()
  }
  //puerto
   settings() {
    //si esto tiene un valor se asigna o escoge uno propio que genera
    this.app.set("port", this._portDefault || process.env.PORT);
  }

   middlewares() {
    this.app.use(morgan("dev")); //muestra x consola mensajes en desarrollo
    //recibir datos del formulario como json
    this.app.use(express.urlencoded({ extended: true }));
    //recibe datos como json (no de formularios)
    this.app.use(express.json({ type: "*/*" })); //mas estandar
    // this.app.use(cors()); //conectarse al back end con el front end
  }
   routes() {   
    this.app.use(router); 
    this.app.use("/cargo", routercnt);
    this.app.use("/departamento", routercnt1); //departamento
    this.app.use("/empleado", routercnt2); //empleado
  }

   async listen(): Promise<void> {
    await this.app.listen(this.app.get("port")); //para que se ejecute en el púerto
    console.log(`Server on port => ${this.app.get("port")}`); //presentar en consola
  }
}
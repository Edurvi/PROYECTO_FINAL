//encapsulado
import {App} from './componentes/servidor'
const main = async () =>{
  const app = new App();
  await app.listen()
}
main()













































//? version sin clases

// //Importar el objeto express del archivo express
// import express, {Request, Response, Application } from "express"; //lo importamos por default
// //import { connect } from "./database"; //importamos de database
// import morgan from "morgan";
// import routercnt from "./routes/cargo.routes";
// import routercnt1 from "./routes/departamento.routes";
// import routercnt2 from "./routes/empleado.routes";

// //Servidor con express (expres es un framework que trabaja como servidor para nodes)
// const app: Application = express(); //const el nombre que yo quiera y la variable que pusimos en el import y instaciamos el objeto
// app.use(morgan("dev")); //Es un middleware de nivel de solicitud HTTP MUESTRA INFORMACION
// app.use(express.json()); //es un middleware que se jecutan como hilo , sirve para presentar a json
// //rutas del servidor
// app.get("/",(req,res)=>{
//   res.send("Bienvenido a mi app")
// })
// app.use("/cargo", routercnt); //cargos
// app.use("/departamento", routercnt1); //departamento
// app.use("/empleado", routercnt2); //empleado 




// //ejecutar el servidor para saber que esta correcto
// app.listen(3000, () => {
//   console.log("Servidor ejecutandose en el puerto 3000");
// }); //listen es el metodo que permite que ejecute el servidor en un puerto y le añadimos una funcion con un mensaje











/* 
//?Departamento
app.get("/departamento", async (req: Request, res: Response) => {
  //res.json("Departamentos de la empresa"); //en el parametro res escogere su metodo json
  const connBD = await connect();
  const departamentos = await connBD.query("SELECT * FROM departamento");
  res.json(departamentos[0]);
});

//?Empleado
app.get("/empleado", async (req: Request, res: Response) => {
  //res.json("Empleados de la empresa"); //en el parametro res escogere su metodo json
  const connBD = await connect();
  const empleados = await connBD.query("SELECT * FROM empleado");
  res.json(empleados[0]);
});
 */

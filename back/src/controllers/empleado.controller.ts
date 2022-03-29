// Aquie es donde va toda la logica
// la funcion va a obtener todos los cargos que estan en cargo.routes

import { Coneccion } from "../bd/database";
import { Request, Response } from "express"; //lo importamos por default
import { Iempleado } from "../interface/empleado";
const conection:Coneccion = new Coneccion();

//controlador de get cargos(funcion o logica de la peticion)
export async function getEmpleados (req:Request, res:Response): Promise<Response | void > {
try{
    const connBD = await conection.getConneccion(); //la llamamos
    const empleados = await connBD.query("SELECT * FROM empleado");
    return res.json(empleados[0]); //los datos propios de la tabla vienen en la pos 0
}
catch (err) {
    console.log(err);
}
};

//Crear empleado












// export async function getEmpleados (req:Request, res:Response): Promise<Response | void > {
// try{
//     const connBD = await connect(); //nos conectamos a la base de datos con el metodo connect
//     const empleados = await connBD.query("SELECT * FROM empleado");
//     return res.json(empleados[0]); //los datos propios de la tabla vienen en la pos 0
// }
// catch (err) {
//     console.log(err);
// }
// };


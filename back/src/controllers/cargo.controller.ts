// Aquie es donde va toda la logica
// la funcion va a obtener todos los cargos que estan en cargo.routes
import {Request, Response } from "express"; //lo importamos por default
import { Coneccion } from "../bd/database";
import { Icargo } from "../interface/cargo";



const conection:Coneccion = new Coneccion();

//controlador de get cargos(funcion o logica de la peticion)
export async function getCargos (req:Request, res:Response): Promise<Response | void > {
try{
    const connBD = await conection.getConneccion(); //la llamamos
    const cargos = await connBD.query("SELECT * FROM cargo");
    return res.json(cargos[0]); //los datos propios de la tabla vienen en la pos 0
}
catch (err) {
    console.log(err);
}
};
//?CREACION DE UN CARGO
//esta funcion va tener que traer datos del servidor
export async function createCargo(req:Request, res: Response){
    try{
        const modCargo:Icargo=req.body
        console.log(modCargo) //en el boy viaja la informacion
        const connBD = await conection.getConneccion(); //la llamamos
        const cargos = await connBD.query("INSERT INTO cargo SET ?",[modCargo]); //el ? significa que vamos aponer el nombre de los campos
        res.json({msg:"Cargo Insertado correctamente",cargos:modCargo}); // presentamos lo que pusimos
    }
    catch(err){
        console.log(err)
    }
}
//?OBTENER UN CARGO MEDIANTE SU ID
export async function getCargoid(req:Request, res: Response){
    const id=req.params.cargoId;
    const connBD =await conection.getConneccion();
    const cargo = await connBD.query("Select * FROM cargo WHERE id = ?",[id])
    res.json(cargo[0])
}

//?ELIMINAR UN CARGO 
export async function deleteCargo(req: Request, res: Response) {
  const id = req.params.cargoId;
  console.log(req.params);
  const connBD = await conection.getConneccion();
  await connBD.query ("DELETE FROM cargo WHERE id = ?",[id]);
  res.json({
      message: "Cargo Eliminado",
      id,
  })
}

//?ACTUALIZAR UN CARGO
export async function updateCargo(req: Request, res: Response) {
  const id = req.params.cargoId;
  const modCargo:Icargo=req.body;
  const connBD = await conection.getConneccion();
  await connBD.query("UPDATE  cargo set ? WHERE id=?", [modCargo,id]);
  res.json({
    message: "Cargo Actualizado",
    modCargo,
  });
}
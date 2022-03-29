// Aquie es donde va toda la logica
// la funcion va a obtener todos los cargos que estan en cargo.routes

import { Coneccion } from "../bd/database";
import { Request, Response } from "express"; //lo importamos por default
import { Idepartamento } from "../interface/departamento";

//controlador de get cargos(funcion o logica de la peticion)

const conection:Coneccion = new Coneccion();

//controlador de get cargos(funcion o logica de la peticion)
export async function getDepartamentos (req:Request, res:Response): Promise<Response | void > {
try{
    const connBD = await conection.getConneccion(); //la llamamos
    const departamentos = await connBD.query("SELECT * FROM departamento");
    return res.json(departamentos[0]); //los datos propios de la tabla vienen en la pos 0
}
catch (err) {
    console.log(err);
}
};




//Crear departamento
export async function createDepartamento(req: Request, res: Response) {
  try {
    const modDepartamento: Idepartamento = req.body;
    console.log(modDepartamento); //en el boy viaja la informacion
    const connBD = await conection.getConneccion(); //la llamamos
    const departamentos = await connBD.query("INSERT INTO departamento SET ?", [modDepartamento]); //el ? significa que vamos aponer el nombre de los campos
    res.json({ msg: "Departamento Insertado correctamente", cargos: modDepartamento }); // presentamos lo que pusimos
  } catch (err) {
    console.log(err);
  }
}

//?OBTENER UN DEPARTAMENTO MEDIANTE SU ID
export async function getDepartamentoid(req:Request, res: Response){
    const id=req.params.departamentoId;
    const connBD =await conection.getConneccion();
    const departamento = await connBD.query("Select * FROM departamento WHERE id = ?",[id])
    res.json(departamento[0])
}

//?ELIMINAR UN Departamento 
export async function deleteDepartamento(req: Request, res: Response) {
  const id = req.params.departamentoId;
  console.log(req.params);
  const connBD = await conection.getConneccion();
  await connBD.query ("DELETE FROM departamento WHERE id = ?",[id]);
  res.json({
      message: "Departamento Eliminado",
      id,
  })
}
//?ACTUALIZAR UN Departamento
export async function updateDepartamento(req: Request, res: Response) {
  const id = req.params.departamentoId;
  const modDepartamento:Idepartamento=req.body;
  const connBD = await conection.getConneccion();
  await connBD.query("UPDATE  departamento set ? WHERE id=?", [modDepartamento,id]);
  res.json({
    message: "Departamento Actualizado",
    modDepartamento,
  });
}










// export async function getDepartamentos  (req: Request, res: Response): Promise<Response|void>{ 
//   try {
//       const connBD = await connect(); //nos conectamos a la base de datos con el metodo connect
//       const departamentos = await connBD.query("SELECT * FROM departamento");
//       return res.json(departamentos[0]); //los datos propios de la tabla vienen en la pos 0
    
//   } catch (err) {
//     console.log(err);
//   }
// };
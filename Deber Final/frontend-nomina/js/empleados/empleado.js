
  import { Empleado } from "./componente.js";
//import {Cargo} from '../cargo/componente'// instanciamos cargo
// import {Departamento} from '../departamento/componente'// instanciamos departamento



 const serEmpleado = new Empleado();
 const d = document;
 const $formEmpleado = d.getElementById("form-empleado");

 d.addEventListener("DOMContentLoaded",()=>{
   serEmpleado.obtenerEmpleados()
   //console.log("obtener empl")
   d.addEventListener("submit",async(e)=>{
     e.preventDefault();
     
     let $nombre = d.getElementById("nombre").value;
     let $cedula = d.getElementById("cedula").value;
     let $cargoid = d.getElementById("cargo").value;
     let $dptoid = d.getElementById("departamento").value;
     let $sueldo = d.getElementById("sueldo").value;
     let $estado = d.getElementById("estado").checked;
     console.log($cargoid)
    console.log(serEmpleado.grabar)
    if (serEmpleado.grabar) {


       let id = Date.now();
             const empleado = {
         nombre: $nombre,
         cedula: $cedula,
         cargoid: $cargoid,
         dptoid: $dptoid,
         sueldo: $sueldo,
         estado: $estado,
       };
       const empleadoJson = JSON.stringify(empleado);
       const res = await serEmpleado.insertarDatos(empleadoJson);
      console.log(empleado);
    console.log("msg")
     } else { //opcione actualizar
      console.log("mensaje")
    


   
       let id = serEmpleado.id;
      const empleado = {
         nombre: $nombre,
         cedula: $cedula,
         cargoid: $cargoid,
         dptoid: $dptoid,
         sueldo: $sueldo,
         estado: $estado,
      };  console.log(serEmpleado.id, empleado);
      console.log(empleado)
       const EmpleadoModJson = JSON.stringify(empleado);
       console.log(EmpleadoModJson, serEmpleado.id)
      const res = await serEmpleado.modificarDatos(EmpleadoModJson, serEmpleado.id);
      console.log(res)
     //mostrar mensaje 
      console.log("elementos al actualizar", EmpleadoModJson, serEmpleado.id);    
     }
    $formEmpleado.reset();
     console.log("mnnsg")
  })
});

 



 

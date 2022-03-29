//? Creamos la conexion a la base de datos
import {createPool,Pool} from "mysql2/promise"  //importamos
//la exportamos para poderlo usar en otro programa la funcion connect

/* export async function connect(){ //creamos una funcion con async
    const connection = await createPool({  //metodo await y la funcion devuelve una cadeda de conexion
        host:"localhost",                  // y cuando se jecuta devuelve algo que esta en connection
        user:"root",
        password:"edurvi",
        database:"nomida2",
        connectionLimit:10,
    })
    return connection;                    // y lo llamamos
} */


//creamos una clase abstracta (clase base que se hereda pero no se puede instanciar)
abstract class Conexion{
    private conn:any;  //any es un atributo significa que es cualquier valor
    constructor(){
        this.conn=null
    }
    abstract getConneccion():Promise<Pool> //este metodo abstracto va ser de tipo promesa
    get _conn(): any{
        return this.conn;    
   }

   set _conn(value){
       this.conn=value;
   }
}
export class Coneccion extends Conexion {
    constructor(){
        super() //ejecuta el constructor de la clase heredada
    }
    async connect(){
        const connection = await createPool({
            host:"localhost",
            user:"root",
            password:"edurvi",
            database:"nomida2",
            connectionLimit:10
        }); 
        return connection;
    }
    async getConneccion():Promise<Pool>{
        return await this.connect(); 
    }
}
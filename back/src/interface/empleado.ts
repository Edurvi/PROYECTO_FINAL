// la varaibles que van aqui se crean en base al modelo llamado cargo
export interface Iempleado {
  id?: number; // el ? significa que el campo es opcional
  nombre: string;
  cargoid?:number;
  dptoid?:number;
  sueldo:number;
  estado: number;
  created_at: Date;
}

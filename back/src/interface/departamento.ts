// la varaibles que van aqui se crean en base al modelo llamado cargo
export interface Idepartamento {
  id?: number; // el ? significa que el campo es opcional
  descripcion: string;
  estado: number;
  created_at: Date;
}

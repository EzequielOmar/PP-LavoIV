export const dbName_Productos = 'productos';

export interface Producto {
  codigo: string;
  producto: {
    nombre:string,
    descripcion: string;
    precio: string;
    stock: number;
    pais: string;
    comestible:Boolean;
  };
}

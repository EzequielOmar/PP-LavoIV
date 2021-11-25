import { Producto } from './producto';

export const dbName_Containers = 'containers';

export interface Contenedor {
  codigo: string;
  marca: string;
  capacidad: number;
  stock: Producto[];
}

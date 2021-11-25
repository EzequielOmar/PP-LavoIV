export const dbName_Usuarios = 'usuarios';

export interface Usuario {
  mail: string;
  tipo: number;
}

export const E_TipoUsuario = {
  admin: 1,
  empleado: 2,
};

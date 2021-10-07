import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { Validator } from './validators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User | null>;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  // Obtener el estado de autenticación
  get authenticated(): boolean {
    return this.user != null; // True ó False
  }

  // Obtener el observador del usuario actual
  get currentUser(): Observable<firebase.User | null> {
    return this.user;
  }

  /*
   * Recibe email y pass
   * Success -> loguea al usuario actualizando
   * el estado de user(Observable) y retorna respuesta (evento y usuario)
   * Error-> retorna el texto del error que corresponda listo
   * para imprimir en pantalla.
   * *Posibles errores de signInWithEmailAndPassword:*
   *  auth/invalid-email
   *  auth/user-disabled
   *  auth/user-not-found
   *  auth/wrong-password
   * @param email string email del usuario
   * @param password string password del usuario  */
  signIn = async (email: string, password: string) =>
    await this.angularFireAuth
      .signInWithEmailAndPassword(Validator.email(email), password)
      .then((res) => res)
      .catch((error) => {
        if (error.code === 'auth/user-disabled') {
          throw new Error('El usuario ha sido deshabilitado.');
        }
        if (error.code === 'auth/user-not-found') {
          throw new Error('No existe un usuario con estos datos.');
        }
        throw new Error('Datos incorrectos.');
      });

  /**
   * Termina la sesion del usuario activo
   * actualiza user(Observable) = null
   */
  signOut = async () => {
    await this.angularFireAuth.signOut();
  };
}

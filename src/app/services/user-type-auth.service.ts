import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { dbName_Usuarios, Usuario } from '../classes/usuario';
import { AuthService } from './auth.service';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root',
})
export class UserTypeGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    private db: DbService
  ) {}

  canActivate = async (route: ActivatedRouteSnapshot): Promise<boolean> => {
    const expectedType = route.data.expectedType;
    return new Promise((res) => {
      this.auth.authUserObservable.subscribe(async (u: any) => {
        if (!u) this.declineAccess(res);
        await this.db
          .getObserver(dbName_Usuarios)
          .doc(u.uid)
          .get()
          .then((doc) => {
            let user = doc.data() as Usuario;
            user.tipo === expectedType ? res(true) : this.declineAccess(res);
          });
      });
    });
  };

  private declineAccess(res: any) {
    res(false);
    this.router.navigate(['/home']);
  }
}

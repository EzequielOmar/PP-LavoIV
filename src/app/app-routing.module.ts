import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { E_TipoUsuario } from './classes/usuario';
import { UserTypeGuardService } from './services/user-type-auth.service';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/bienvenida/bienvenida.module')
        .then((m: any) => {
          return m.BienvenidaModule;
        })
        .catch((e) => {
          console.log(e);
        }),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module')
        .then((m: any) => {
          return m.LoginModule;
        })
        .catch((e) => {
          console.log(e);
        }),
  },
  {
    path: 'producto/alta',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./pages/alta-producto/alta-producto.module')
        .then((m: any) => {
          return m.AltaProductoModule;
        })
        .catch((e) => {
          console.log(e);
        }),
  },
  {
    path: 'producto/detalle',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./pages/detalle-producto/detalle-producto.module').then(
        (m) => m.DetalleProductoModule
      ),
  },
  {
    path: 'container/abm',
    canActivate: [UserTypeGuardService],
    data: {
      expectedType: E_TipoUsuario.admin,
    },
    loadChildren: () =>
      import('./pages/abm-container/abm-container.module').then(
        (m) => m.AbmContainerModule
      ),
  },
  {
    path: 'container/cargar',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    loadChildren: () =>
      import('./pages/cargar-container/cargar-container.module').then(
        (m) => m.CargarContainerModule
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

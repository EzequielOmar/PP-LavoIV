import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./bienvenida/bienvenida.module')
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
      import('./login/login.module')
        .then((m: any) => {
          return m.LoginModule;
        })
        .catch((e) => {
          console.log(e);
        }),
  },
  {
    path: 'producto/alta',
    loadChildren: () =>
      import('./alta-producto/alta-producto.module')
        .then((m: any) => {
          return m.AltaProductoModule;
        })
        .catch((e) => {
          console.log(e);
        }),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

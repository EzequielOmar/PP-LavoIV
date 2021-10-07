import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
//firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ErrorComponent,
    LoginComponent,
    NavComponent,
    AltaProductoComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

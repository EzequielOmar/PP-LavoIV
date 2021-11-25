import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductoComponent } from './detalle-producto.component';
import { TablaProductosComponent } from '../../components/tabla-productos/tabla-productos.component';
import { DatosProductoComponent } from '../../components/datos-producto/datos-producto.component';
import { DatosPaisComponent } from '../../components/datos-pais/datos-pais.component';


@NgModule({
  declarations: [
    DetalleProductoComponent,
    TablaProductosComponent,
    DatosProductoComponent,
    DatosPaisComponent
  ],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule
  ]
})
export class DetalleProductoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductoComponent } from './detalle-producto.component';
import { DatosPaisComponent } from '../../components/datos-pais/datos-pais.component';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  declarations: [DetalleProductoComponent, DatosPaisComponent],
  imports: [CommonModule, DetalleProductoRoutingModule, SharedComponentsModule],
})
export class DetalleProductoModule {}

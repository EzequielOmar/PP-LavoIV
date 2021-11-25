import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaContainerComponent } from 'src/app/components/tabla-container/tabla-container.component';
import { TablaProductosComponent } from 'src/app/components/tabla-productos/tabla-productos.component';
import { DatosProductoComponent } from 'src/app/components/datos-producto/datos-producto.component';

@NgModule({
  declarations: [
    TablaContainerComponent,
    TablaProductosComponent,
    DatosProductoComponent,
  ],
  imports: [CommonModule],
  exports: [
    TablaContainerComponent,
    TablaProductosComponent,
    DatosProductoComponent,
  ],
})
export class SharedComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmContainerRoutingModule } from './abm-container-routing.module';
import { AbmContainerComponent } from './abm-container.component';
import { DatosContainerComponent } from '../../components/datos-container/datos-container.component';
import { FormsModule } from '@angular/forms';
import { TablaContainerComponent } from '../../components/tabla-container/tabla-container.component';
import { ModifContainerComponent } from '../../components/modif-container/modif-container.component';
import { BorrarContainerComponent } from '../../components/borrar-container/borrar-container.component';

@NgModule({
  declarations: [AbmContainerComponent, DatosContainerComponent, TablaContainerComponent, ModifContainerComponent, BorrarContainerComponent],
  imports: [CommonModule, AbmContainerRoutingModule, FormsModule],
})
export class AbmContainerModule {}

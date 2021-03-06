import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmContainerRoutingModule } from './abm-container-routing.module';
import { AbmContainerComponent } from './abm-container.component';
import { DatosContainerComponent } from '../../components/datos-container/datos-container.component';
import { FormsModule } from '@angular/forms';
import { ModifContainerComponent } from '../../components/modif-container/modif-container.component';
import { BorrarContainerComponent } from '../../components/borrar-container/borrar-container.component';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';

@NgModule({
  declarations: [
    AbmContainerComponent,
    DatosContainerComponent,
    ModifContainerComponent,
    BorrarContainerComponent,
  ],
  imports: [
    CommonModule,
    AbmContainerRoutingModule,
    FormsModule,
    SharedComponentsModule,
  ],
})
export class AbmContainerModule {}

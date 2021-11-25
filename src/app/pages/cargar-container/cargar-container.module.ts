import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarContainerRoutingModule } from './cargar-container-routing.module';
import { CargarContainerComponent } from './cargar-container.component';
import { SharedComponentsModule } from 'src/app/modules/shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CargarContainerComponent],
  imports: [
    CommonModule,
    CargarContainerRoutingModule,
    SharedComponentsModule,
    FormsModule,
  ],
})
export class CargarContainerModule {}

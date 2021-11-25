import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmContainerComponent } from './abm-container.component';

const routes: Routes = [{ path: '', component: AbmContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbmContainerRoutingModule {}

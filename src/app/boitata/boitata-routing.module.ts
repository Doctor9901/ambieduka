import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoitataPage } from './boitata.page';

const routes: Routes = [
  {
    path: '',
    component: BoitataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoitataPageRoutingModule {}

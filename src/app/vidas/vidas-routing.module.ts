import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidasPage } from './vidas.page';

const routes: Routes = [
  {
    path: '',
    component: VidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidasPageRoutingModule {}

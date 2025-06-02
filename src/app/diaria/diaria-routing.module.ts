import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiariaPage } from './diaria.page';

const routes: Routes = [
  {
    path: '',
    component: DiariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiariaPageRoutingModule {}

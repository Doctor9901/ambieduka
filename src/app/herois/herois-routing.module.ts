import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroisPage } from './herois.page';

const routes: Routes = [
  {
    path: '',
    component: HeroisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroisPageRoutingModule {}

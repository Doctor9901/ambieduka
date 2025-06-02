import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurupiraPage } from './curupira.page';

const routes: Routes = [
  {
    path: '',
    component: CurupiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurupiraPageRoutingModule {}

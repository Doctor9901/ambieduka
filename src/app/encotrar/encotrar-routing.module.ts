import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncotrarPage } from './encotrar.page';

const routes: Routes = [
  {
    path: '',
    component: EncotrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncotrarPageRoutingModule {}

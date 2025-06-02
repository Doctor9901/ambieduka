import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlossarioPage } from './glossario.page';

const routes: Routes = [
  {
    path: '',
    component: GlossarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlossarioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaiporaPage } from './caipora.page';

const routes: Routes = [
  {
    path: '',
    component: CaiporaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaiporaPageRoutingModule {}

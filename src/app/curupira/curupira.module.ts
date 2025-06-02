import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurupiraPageRoutingModule } from './curupira-routing.module';

import { CurupiraPage } from './curupira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurupiraPageRoutingModule
  ],
  declarations: [CurupiraPage]
})
export class CurupiraPageModule {}

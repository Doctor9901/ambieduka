import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroisPageRoutingModule } from './herois-routing.module';

import { HeroisPage } from './herois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeroisPageRoutingModule
  ],
  declarations: [HeroisPage]
})
export class HeroisPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoitataPageRoutingModule } from './boitata-routing.module';

import { BoitataPage } from './boitata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoitataPageRoutingModule
  ],
  declarations: [BoitataPage]
})
export class BoitataPageModule {}

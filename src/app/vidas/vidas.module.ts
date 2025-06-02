import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidasPageRoutingModule } from './vidas-routing.module';

import { VidasPage } from './vidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidasPageRoutingModule
  ],
  declarations: [VidasPage]
})
export class VidasPageModule {}

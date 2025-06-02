import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiariaPageRoutingModule } from './diaria-routing.module';

import { DiariaPage } from './diaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiariaPageRoutingModule
  ],
  declarations: [DiariaPage]
})
export class DiariaPageModule {}

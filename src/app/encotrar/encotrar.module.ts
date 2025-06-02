import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EncotrarPageRoutingModule } from './encotrar-routing.module';

import { EncotrarPage } from './encotrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncotrarPageRoutingModule
  ],
  declarations: [EncotrarPage]
})
export class EncotrarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagensPageRoutingModule } from './imagens-routing.module';

import { ImagensPage } from './imagens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagensPageRoutingModule
  ],
  declarations: [ImagensPage]
})
export class ImagensPageModule {}

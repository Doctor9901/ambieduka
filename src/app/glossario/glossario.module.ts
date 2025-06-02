import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlossarioPageRoutingModule } from './glossario-routing.module';

import { GlossarioPage } from './glossario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlossarioPageRoutingModule
  ],
  declarations: [GlossarioPage]
})
export class GlossarioPageModule {}

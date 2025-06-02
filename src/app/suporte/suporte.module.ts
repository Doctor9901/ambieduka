import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Adicione ReactiveFormsModule
import { IonicModule } from '@ionic/angular';

import { SuportePageRoutingModule } from './suporte-routing.module';

import { SuportePage } from './suporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Adicione aqui
    IonicModule,
    SuportePageRoutingModule
  ],
  declarations: [SuportePage]
})
export class SuportePageModule {}

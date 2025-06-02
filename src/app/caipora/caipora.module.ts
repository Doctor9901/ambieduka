import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaiporaPageRoutingModule } from './caipora-routing.module';

import { CaiporaPage } from './caipora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaiporaPageRoutingModule
  ],
  declarations: [CaiporaPage]
})
export class CaiporaPageModule {}

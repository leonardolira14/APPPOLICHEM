
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardproductosComponent } from './cardproductos.component'
import { BarbuttonsModule } from '../barbuttons/barbuttons.module';

@NgModule({
  declarations: [CardproductosComponent],
  imports: [
    CommonModule,
    IonicModule,
    BarbuttonsModule
  ],
  exports:[
    CardproductosComponent
  ]
})
export class CardproductosModule { }

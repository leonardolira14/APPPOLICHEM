import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarbuttonsComponent } from './barbuttons.component'


@NgModule({
  declarations: [BarbuttonsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    BarbuttonsComponent
  ]
})
export class BarbuttonsModule { }

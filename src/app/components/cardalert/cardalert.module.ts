import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardalertComponent } from './cardalert.component';


@NgModule({
  declarations: [CardalertComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CardalertComponent
  ]
})
export class CardalertModule { }

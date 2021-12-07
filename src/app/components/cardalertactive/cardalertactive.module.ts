import { CardalertactiveComponent } from './cardalertactive.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CardalertactiveComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[CardalertactiveComponent]
})
export class CardalertactiveModule { }

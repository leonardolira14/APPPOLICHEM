import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadproductsComponent } from './headproducts.component'



@NgModule({
  declarations: [HeadproductsComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    HeadproductsComponent
  ]
})
export class HeadproductsModule { }

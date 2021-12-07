import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HeadComponent } from './head.component';


@NgModule({
  declarations: [HeadComponent],
  imports: [
    CommonModule,
    IonicModule

  ],
  exports:[
    HeadComponent
  ]
})
export class HeadModule { }

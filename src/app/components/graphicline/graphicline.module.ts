import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphiclineComponent } from './graphicline.component';
import {ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GraphiclineComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    GraphiclineComponent
  ]
})
export class GraphiclineModule { }

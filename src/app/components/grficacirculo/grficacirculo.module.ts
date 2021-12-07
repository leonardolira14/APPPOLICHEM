import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrficacirculoComponent } from './grficacirculo.component';
import {  ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GrficacirculoComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    GrficacirculoComponent
  ]
})
export class GrficacirculoModule { }

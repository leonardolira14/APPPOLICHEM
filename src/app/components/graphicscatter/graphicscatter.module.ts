import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicscatterComponent } from './graphicscatter.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GraphicscatterComponent],
  imports: [
    CommonModule, 
    ChartsModule
  ],
  exports:[
    GraphicscatterComponent
  ]
})
export class GraphicscatterModule { }

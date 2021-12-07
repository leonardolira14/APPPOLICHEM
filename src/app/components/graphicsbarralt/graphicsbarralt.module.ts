import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  GraphicsbarraltComponent} from './graphicsbarralt.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [GraphicsbarraltComponent],
  imports: [
    CommonModule,
    IonicModule,
    ChartsModule
  ],
  exports:[
    GraphicsbarraltComponent
  ]
})
export class GraphicsbarraltModule { }

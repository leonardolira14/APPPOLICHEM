import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphiccircComponent } from './graphiccirc.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [GraphiccircComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports:[
    GraphiccircComponent
  ]
})
export class GraphiccircModule { }

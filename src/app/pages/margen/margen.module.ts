import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MargenComponent } from './margen.component'
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FooterModule } from '../../components/footer/footer.module'
import { HeadModule } from '../../components/head/head.module'
import { BarbuttonsModule } from '../../components/barbuttons/barbuttons.module'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':tipo',
        component: MargenComponent
      }
    ]
  }
];

@NgModule({
  declarations: [MargenComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FooterModule,
    HeadModule,
    BarbuttonsModule
  ]
})
export class MargenModule { }

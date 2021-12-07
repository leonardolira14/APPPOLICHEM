import { ActivasComponent } from './activas/activas.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { FooterModule } from '../../components/footer/footer.module';
import { HeadModule } from '../../components/head/head.module';
import { CardalertModule } from '../../components/cardalert/cardalert.module';
import { BarbuttonsModule } from '../../components/barbuttons/barbuttons.module';

import { FormComponent } from './form/form.component';
import { CardalertactiveModule } from '../../components/cardalertactive/cardalertactive.module'

const routes: Routes = [
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'activas',
    component:ActivasComponent
  }
]


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ActivasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeadModule,
    FooterModule,
    BarbuttonsModule,
    CardalertModule,
    CardalertactiveModule
  ]
})
export class AlertaModule { }

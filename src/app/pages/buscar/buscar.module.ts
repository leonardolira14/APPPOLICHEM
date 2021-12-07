import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar.component'
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../components/footer/footer.module';
import { HeadModule } from '../../components/head/head.module';


const routes: Routes = [
  {
    path: '',
    component: BuscarComponent
  }
];

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    HeadModule,
    FooterModule
  ]
})
export class BuscarModule { }

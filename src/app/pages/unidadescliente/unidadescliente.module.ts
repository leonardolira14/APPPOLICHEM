import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../unidadescliente/inicio/inicio.component';
import { IonicModule } from '@ionic/angular';



import { GraphiclineModule } from '../../components/graphicline/graphicline.module';
import { FooterModule } from '../../components/footer/footer.module'
import { HeadModule } from '../../components/head/head.module';
import { BarbuttonsModule } from '../../components/barbuttons/barbuttons.module'

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  }
  
];
@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GraphiclineModule,
    HeadModule,
    FooterModule,
    IonicModule,
    BarbuttonsModule
  ]
})
export class UnidadesclienteModule { }

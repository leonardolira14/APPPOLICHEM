import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component'
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GraphiccircModule } from '../../components/graphiccirc/graphiccirc.module';
import { GraphicscatterModule } from '../../components/graphicscatter/graphicscatter.module'
import { GraphiclineModule } from '../../components/graphicline/graphicline.module';
import { FooterModule } from '../../components/footer/footer.module';
import { HeadModule } from '../../components/head/head.module';

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
    IonicModule,
    RouterModule.forChild(routes),
    GraphiccircModule,
    GraphicscatterModule,
    GraphiclineModule,
    FooterModule,
    HeadModule
  ]
})
export class InicioModule { }

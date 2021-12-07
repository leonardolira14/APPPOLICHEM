import { GeneralesComponent } from './generales/generales.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AnalisisproductoComponent } from './analisisproducto/analisisproducto.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MargervolumenComponent } from './graphic/margervolumen.component';
import { FooterModule } from '../../components/footer/footer.module'
import { HeadModule } from '../../components/head/head.module';
import { GraphicscatterModule } from '../../components/graphicscatter/graphicscatter.module';
import { RouterModule, Routes } from '@angular/router';
import { BarbuttonsModule } from '../../components/barbuttons/barbuttons.module'
import { PreciosVolumenComponent } from './precios-volumen/precios-volumen.component';
import { AnalisiscompetenciaComponent } from './analisiscompetencia/analisiscompetencia.component';
import { GraphicsbarraltModule } from '../../components/graphicsbarralt/graphicsbarralt.module';
import { GrficacirculoModule } from '../../components/grficacirculo/grficacirculo.module';
import { GeneralesformComponent } from './generalesform/generalesform.component';
const routes: Routes = [
  {
    path: '',
    component: MargervolumenComponent
  },
  {
    path: 'analisis',
    component: AnalisisproductoComponent
  },
  {
    path: 'preciovolumen',
    component: PreciosVolumenComponent
  },
  {
    path:'analisiscompetencia',
    component:AnalisiscompetenciaComponent
  },
  {
    path:'detalle',
    component:DetalleComponent
  },
  {
    path:'generales',
    component:GeneralesComponent
  }
  ,
  {
    path:'generalesform',
    component:GeneralesformComponent
  }
  
];

@NgModule({
  declarations: [
    MargervolumenComponent,
    AnalisisproductoComponent,
    PreciosVolumenComponent,
    AnalisiscompetenciaComponent,
    DetalleComponent,
    GeneralesComponent,
    GeneralesformComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HeadModule,
    FooterModule,
    GraphicscatterModule,
    RouterModule.forChild(routes),
    BarbuttonsModule,
    GraphicsbarraltModule,
    GrficacirculoModule
  ],
  exports:[
    MargervolumenComponent
  ]
})
export class MargervolumenModule { }

import { RevisarComponent } from './revisar/revisar.component';
import { GeneralesComponent } from './generales/generales.component';
import { EmpaqueComponent } from './empaque/empaque.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ContendioComponent } from './contendio/contendio.component';
import { CardproductosModule } from './../../components/cardproductos/cardproductos.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../../components/footer/footer.module';
import { HeadModule } from '../../components/head/head.module';
import { FormsComponent } from './forms/forms.component'
import { HeadproductsModule } from '../../components/headproducts/headproducts.module';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path:'contenido',
    component:ContendioComponent
  },
  {
    path:'descripcion',
    component:DescripcionComponent
  },
  {
    path:'empaque',
    component:EmpaqueComponent
  },
  {
    path:'generales',
    component:GeneralesComponent
  }
  ,
  {
    path:'revisar',
    component:RevisarComponent
  }
];

@NgModule({
  declarations: [ListComponent,FormsComponent,ContendioComponent,EmpaqueComponent,
    DescripcionComponent,
    GeneralesComponent,
    RevisarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FooterModule,
    HeadModule,
    CardproductosModule,
    HeadproductsModule
   
  ]
})
export class ProductosModule { }

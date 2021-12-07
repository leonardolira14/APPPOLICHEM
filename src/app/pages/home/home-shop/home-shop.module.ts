import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeShopPage } from './home-shop.page';
import {ComponentsModule} from "../../../components/components.module";

const routes: Routes = [
  {
    path: '',
    component: HomeShopPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ComponentsModule
    ],
  declarations: [HomeShopPage]
})
export class HomeShopPageModule {}

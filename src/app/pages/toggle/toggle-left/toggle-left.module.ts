import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToggleLeftPage } from './toggle-left.page';

const routes: Routes = [
  {
    path: '',
    component: ToggleLeftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToggleLeftPage]
})
export class ToggleLeftPageModule {}

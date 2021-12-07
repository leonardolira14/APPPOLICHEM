import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomSpinnerPage } from './custom-spinner.page';

const routes: Routes = [
  {
    path: '',
    component: CustomSpinnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomSpinnerPage]
})
export class CustomSpinnerPageModule {}

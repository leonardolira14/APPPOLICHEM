import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSlidingLeftPage } from './list-sliding-left.page';

const routes: Routes = [
  {
    path: '',
    component: ListSlidingLeftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSlidingLeftPage]
})
export class ListSlidingLeftPageModule {}

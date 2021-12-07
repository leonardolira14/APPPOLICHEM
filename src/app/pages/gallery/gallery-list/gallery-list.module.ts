import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {GalleryListPage} from './gallery-list.page';
import {ComponentsModule} from '../../../components/components.module';
import {GalleryFullPage} from '../gallery-full/gallery-full.page';

const routes: Routes = [
    {
        path: '',
        component: GalleryListPage
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
    declarations: [GalleryListPage, GalleryFullPage],
    entryComponents: [GalleryFullPage]
})
export class GalleryListPageModule {
}

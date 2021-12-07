import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryPage} from './gallery.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/gallery/gallery-home', pathMatch: 'full'
    },
    {
        path: '', component: GalleryPage, children: [
            {
                path: 'gallery-home',
                loadChildren: () => import('../../pages/gallery/gallery-home/gallery-home.module').then(m => m.GalleryHomePageModule)
            },
            {
                path: 'gallery-list',
                loadChildren: () => import('../../pages/gallery/gallery-list/gallery-list.module').then(m => m.GalleryListPageModule)
            },
            {
                path: 'gallery-list/:name',
                loadChildren: () => import('../../pages/gallery/gallery-list/gallery-list.module').then(m => m.GalleryListPageModule)
            },
            {
                path: 'gallery-list1',
                loadChildren: () => import('../../pages/gallery/gallery-list1/gallery-list1.module').then(m => m.GalleryList1PageModule)
            },
            {
                path: 'gallery-full2',
                loadChildren: () => import('../../pages/gallery/gallery-full2/gallery-full2.module').then(m => m.GalleryFull2PageModule)
            }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GalleryRoutingModule {
}

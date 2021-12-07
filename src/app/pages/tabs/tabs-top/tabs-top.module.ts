import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {TabsTopPage} from './tabs-top.page';

const routes: Routes = [
    {
        path: '', redirectTo: '/tabs-top/search', pathMatch: 'full'
    },
    {
        path: '',
        component: TabsTopPage,
        children: [
            {
                path: 'profile',
                loadChildren: () => import('../../../pages/profile/profile4/profile4.module').then(m => m.Profile4PageModule)
            },
            {
                path: 'search',
                loadChildren: () => import('../../../pages/search/search2/search2.module')
                    .then(m => m.Search2PageModule)
            },
            {
                path: 'list',
                loadChildren: () => import('../../../pages/progress/skeleton-list/skeleton-list.module').then(m => m.SkeletonListPageModule)
            }
        ]
    },

];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsTopPage]
})
export class TabsTopPageModule {
}

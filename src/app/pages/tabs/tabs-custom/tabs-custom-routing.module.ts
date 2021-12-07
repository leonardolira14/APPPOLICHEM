import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsCustomPage} from './tabs-custom.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/tabs-custom/search', pathMatch: 'full'
    },
    {
        path: '',
        component: TabsCustomPage,
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsCustomRoutingModule {
}

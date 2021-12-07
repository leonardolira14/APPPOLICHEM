import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsDefaultPage} from './tabs-default.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/tabs-default/home', pathMatch: 'full'
    },
    {
        path: '',
        component: TabsDefaultPage,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../../pages/home/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'list',
                loadChildren: () => import('../../../pages/list/list-drag-friend/list-drag-friend.module')
                    .then(m => m.ListDragFriendPageModule)
            },
            {
                path: 'my',
                loadChildren: () => import('../../../pages/profile/profile/profile.module').then(m => m.ProfilePageModule)
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsDefaultRoutingModule {
}

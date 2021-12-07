import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsBottomPage} from './tabs-bottom.page';


const routes: Routes = [
    {
        path: '', redirectTo: '/tabs-bottom/slide', pathMatch: 'full'
    },
    {
        path: '',
        component: TabsBottomPage,
        children: [
            {path: 'slide', loadChildren: './sub-page/sub-page.module#SubPagePageModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsBottomRoutingModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {Card3Page} from './card3.page';
import {ComponentsModule} from '../../../components/components.module';

const routes: Routes = [
    {
        path: '',
        component: Card3Page
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
    declarations: [Card3Page]
})
export class Card3PageModule {
}

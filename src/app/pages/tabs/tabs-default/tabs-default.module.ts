import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsDefaultPage} from './tabs-default.page';
import {TabsDefaultRoutingModule} from './tabs-default-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabsDefaultRoutingModule

    ],
    declarations: [TabsDefaultPage]
})
export class TabsDefaultPageModule {
}

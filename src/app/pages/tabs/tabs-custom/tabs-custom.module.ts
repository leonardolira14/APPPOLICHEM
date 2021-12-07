import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsCustomPage} from './tabs-custom.page';
import {TabsCustomRoutingModule} from './tabs-custom-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabsCustomRoutingModule
    ],
    declarations: [TabsCustomPage]
})
export class TabsCustomPageModule {
}

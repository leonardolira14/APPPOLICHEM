import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsBottomPage} from './tabs-bottom.page';
import {TabsBottomRoutingModule} from './tabs-bottom-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TabsBottomRoutingModule
    ],
    declarations: [TabsBottomPage]
})
export class TabsBottomPageModule {
}

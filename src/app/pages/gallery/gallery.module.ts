import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {GalleryPage} from './gallery.page';
import {GalleryRoutingModule} from './gallery-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GalleryRoutingModule
    ],
    declarations: [GalleryPage]
})
export class GalleryPageModule {
}

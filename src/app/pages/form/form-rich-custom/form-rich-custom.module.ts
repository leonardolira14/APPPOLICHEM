import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FormRichCustomPage} from './form-rich-custom.page';
import {QuillModule} from 'ngx-quill';

const routes: Routes = [
    {
        path: '',
        component: FormRichCustomPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        QuillModule
    ],
    declarations: [FormRichCustomPage]
})
export class FormRichCustomPageModule {
}

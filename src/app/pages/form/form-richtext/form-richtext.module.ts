import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FormRichtextPage} from './form-richtext.page';
import {QuillModule} from 'ngx-quill';

const routes: Routes = [
    {
        path: '',
        component: FormRichtextPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        QuillModule
    ],
    declarations: [FormRichtextPage]
})
export class FormRichtextPageModule {
}

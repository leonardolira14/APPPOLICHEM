import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SplashScreenPage} from './splash-screen.page';
import {SplashSlideTopComponent} from '../splash-slide-top/splash-slide-top.component';
import {SplashSlideBlurredComponent} from '../splash-slide-blurred/splash-slide-blurred.component';
import {SplashSlide3Component} from '../splash-slide3/splash-slide3.component';

const routes: Routes = [
    {
        path: '',
        component: SplashScreenPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SplashScreenPage, SplashSlideTopComponent, SplashSlideBlurredComponent, SplashSlide3Component],
    entryComponents: [SplashSlideTopComponent, SplashSlideBlurredComponent, SplashSlide3Component]
})
export class SplashScreenPageModule {
}

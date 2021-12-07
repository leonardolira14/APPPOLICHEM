import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {SplashSlideTopComponent} from '../splash-slide-top/splash-slide-top.component';
import {SplashSlideBlurredComponent} from '../splash-slide-blurred/splash-slide-blurred.component';
import {SplashSlide3Component} from '../splash-slide3/splash-slide3.component';

@Component({
    selector: 'app-splash-screen',
    templateUrl: './splash-screen.page.html',
    styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
    list = [
        {id: 1, title: 'Slide Top'},
        {id: 2, title: 'Slide Blurred'},
        {id: 3, title: 'Slide Multiple Animations'},
    ];

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    async onOpen(id: number) {
        if (id === 1) {
            this.openModal(SplashSlideTopComponent);
        }
        if (id === 2) {
            this.openModal(SplashSlideBlurredComponent);
        }
        if (id === 3) {
            this.openModal(SplashSlide3Component);
        }
    }

    async openModal(component: any) {
        const modal = await this.modalCtrl.create({component});
        await modal.present();
    }


}

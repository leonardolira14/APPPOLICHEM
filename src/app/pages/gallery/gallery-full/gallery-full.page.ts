import {Component, Input, NgZone, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-gallery-full',
    templateUrl: './gallery-full.page.html',
    styleUrls: ['./gallery-full.page.scss'],
})
export class GalleryFullPage implements OnInit {
    @Input() name: string;
    list = [
        {img: 'assets/images/card/31.jpg', title: 'Ionic App', quantity: 18},
        {img: 'assets/images/card/34.jpg', title: 'Ionic Template', quantity: 18},
        {img: 'assets/images/card/41.jpg', title: 'Angular App', quantity: 18},
        {img: 'assets/images/card/60.jpg', title: 'Cordova', quantity: 18},
        {img: 'assets/images/card/51.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/52.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/53.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/54.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/55.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/56.jpg', title: 'Ionic Framework', quantity: 18}
    ];
    list1 = [];

    constructor(public modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this.list1 = this.list.map(s => s.img);
    }

    onClose() {
        this.modalCtrl.dismiss();
    }

}

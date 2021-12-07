import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {GalleryFullPage} from '../gallery-full/gallery-full.page';

@Component({
    selector: 'app-gallery-list',
    templateUrl: './gallery-list.page.html',
    styleUrls: ['./gallery-list.page.scss'],
})
export class GalleryListPage implements OnInit {
    name: string;
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

    constructor(private route: ActivatedRoute,
                public modalCtrl: ModalController) {
        this.name = this.route.snapshot.paramMap.get('name');
        this.list1 = this.name === '' ? this.list : this.list.filter(s => s.title === this.name);
    }

    ngOnInit() {
    }

    async onOpen(title: string) {
        const modal = await this.modalCtrl.create({
            component: GalleryFullPage,
            componentProps: {'name': title}
        });
        await modal.present();
    }

}

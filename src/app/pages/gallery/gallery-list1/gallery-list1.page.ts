import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery-list1',
    templateUrl: './gallery-list1.page.html',
    styleUrls: ['./gallery-list1.page.scss'],
})
export class GalleryList1Page implements OnInit {
    list = [
        {img: 'assets/images/card/2.jpg', title: 'Ionic App', quantity: 18},
        {img: 'assets/images/card/4.jpg', title: 'Ionic Template', quantity: 18},
        {img: 'assets/images/card/5.jpg', title: 'Angular App', quantity: 18},
        {img: 'assets/images/card/6.jpg', title: 'Cordova', quantity: 18},
        {img: 'assets/images/card/1.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/3.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/7.jpg', title: 'Ionic Framework', quantity: 18},
        {img: 'assets/images/card/8.jpg', title: 'Ionic Framework', quantity: 18}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

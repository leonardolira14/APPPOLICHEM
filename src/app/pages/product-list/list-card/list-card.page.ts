import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-card',
    templateUrl: './list-card.page.html',
    styleUrls: ['./list-card.page.scss'],
})
export class ListCardPage implements OnInit {
    list = [
        {img: 'assets/images/card/37.jpg', cate: 'Theme', title: 'Ionic UI App', subTitle: 'NEW ARRIVALS', price: 29.99},
        {img: 'assets/images/card/36.jpg', cate: 'Theme', title: 'Angular UI App', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/41.jpg', cate: 'Theme', title: 'Cordova UI App', subTitle: 'NEW ARRIVALS', price: 78.99},
        {img: 'assets/images/card/43.jpg', cate: 'Theme', title: 'Ionic Theme App', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/45.jpg', cate: 'Theme', title: 'Angular Theme App', subTitle: 'NEW ARRIVALS', price: 38.99}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

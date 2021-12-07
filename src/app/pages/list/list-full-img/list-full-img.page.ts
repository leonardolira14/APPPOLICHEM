import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-list-full-img',
    templateUrl: './list-full-img.page.html',
    styleUrls: ['./list-full-img.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListFullImgPage implements OnInit {
    list = [
        {
            img: 'assets/images/list/21.jpg',
            title: 'Ionic Framework',
            stars: 5,
            active: false,
            reviews: '7.17 (167 reviews)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            img: 'assets/images/list/22.jpg',
            title: 'Angular 8',
            stars: 4,
            active: false,
            reviews: '8.15 (22 reviews)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            img: 'assets/images/list/23.jpg',
            title: 'Ionic 5',
            stars: 3,
            active: false,
            reviews: '9.12 (222 reviews)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        },
        {
            img: 'assets/images/list/24.jpg',
            title: 'Cordova App',
            stars: 2,
            active: false,
            reviews: '1.17 (99 reviews)',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    toggle(item) {
        item.active = !item.active;
    }

}

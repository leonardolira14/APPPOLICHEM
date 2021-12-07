import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    isList = true;
    list = [
        {img: 'assets/images/card/8.jpg', cate: 'WOMEN', title: 'Sweater Dress', subTitle: 'NEW ARRIVALS', price: 38.99},
        {img: 'assets/images/card/7.jpg', cate: 'WOMEN', title: 'Sleeve Henley', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/5.jpg', cate: 'WOMEN', title: 'Denim Jacket', subTitle: 'NEW ARRIVALS', price: 38.99},
        {img: 'assets/images/card/3.jpg', cate: 'WOMEN', title: 'Sweater', subTitle: 'NEW ARRIVALS', price: 78.99},
        {img: 'assets/images/card/76.jpg', cate: 'WOMEN', title: 'Skinny Jeans', subTitle: 'NEW ARRIVALS', price: 79.99},
        {img: 'assets/images/card/75.jpg', cate: 'WOMEN', title: 'Puffer Jacket', subTitle: 'NEW ARRIVALS', price: 29.99},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.isList = !this.isList;
    }

}

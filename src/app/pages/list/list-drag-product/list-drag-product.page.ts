import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-list-drag-product',
    templateUrl: './list-drag-product.page.html',
    styleUrls: ['./list-drag-product.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListDragProductPage implements OnInit {
    list = [
        {title: 'Apple iPhone 11', price: 999, color: 'black', img: 'assets/images/list/1.jpg'},
        {title: 'Huawei Mate 30 Pro', price: 888, color: 'white', img: 'assets/images/list/5.jpg'},
        {title: 'IPhone 11 Green', price: 999, color: 'white', img: 'assets/images/list/3.jpg'},
        {title: 'Galaxy S11', price: 668, color: 'white', img: 'assets/images/list/7.jpg'},
        {title: 'Honor V20', price: 679, color: 'white', img: 'assets/images/list/5.jpg'},
        {title: 'Honor Pro', price: 379, color: 'white', img: 'assets/images/list/6.jpg'},
        {title: 'IPhone 11 Green Yellow', price: 999, color: 'white', img: 'assets/images/list/4.jpg'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    doReorder(ev: any) {
        console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
        ev.detail.complete();
    }


}

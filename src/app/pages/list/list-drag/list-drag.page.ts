import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-list-drag',
    templateUrl: './list-drag.page.html',
    styleUrls: ['./list-drag.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListDragPage implements OnInit {
    list = [
        {title: 'Apple iPhone X', price: 999, color: 'black'},
        {title: 'Huawei Mate 30 Pro', price: 888, color: 'white'},
        {title: 'iPhone 8 Plus', price: 321, color: 'white'},
        {title: 'Galaxy S11', price: 663, color: 'white'},
        {title: 'iPhone 7 Plus', price: 367, color: 'white'},
        {title: 'Galaxy S10', price: 223, color: 'white'},
        {title: 'iPhone 11', price: 1221, color: 'white'},
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

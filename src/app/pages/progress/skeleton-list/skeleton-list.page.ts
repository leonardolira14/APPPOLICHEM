import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
    selector: 'app-skeleton-list',
    templateUrl: './skeleton-list.page.html',
    styleUrls: ['./skeleton-list.page.scss'],
})
export class SkeletonListPage implements OnInit {
    list: any;

    constructor() {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        timer(3000).subscribe(r => {
            this.list = [
                {title: 'iPhone 11', price: 999, color: 'black', img: 'assets/images/list/1.jpg'},
                {title: 'Mate 30 Pro', price: 888, color: 'white', img: 'assets/images/list/2.jpg'},
                {title: 'iPhone 11', price: 321, color: 'white', img: 'assets/images/list/3.jpg'},
                {title: 'Galaxy S11', price: 663, color: 'white', img: 'assets/images/list/4.jpg'},
                {title: 'Honor V20', price: 367, color: 'white', img: 'assets/images/list/5.jpg'},
                {title: 'Galaxy S10', price: 223, color: 'white', img: 'assets/images/list/6.jpg'},
                {title: 'Galaxy p20', price: 1221, color: 'white', img: 'assets/images/list/7.jpg'},
            ];
        });
    }

}

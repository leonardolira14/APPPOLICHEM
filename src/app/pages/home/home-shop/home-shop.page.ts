import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentModel, HomeService} from '../../../shared';

@Component({
    selector: 'app-home-shop',
    templateUrl: './home-shop.page.html',
    styleUrls: ['./home-shop.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeShopPage implements OnInit {
    bannerList: Array<ContentModel>;
    pageList = [1, 2, 3, 4, 5];

    constructor(private homeService: HomeService) {
        this.bannerList = this.homeService.getBannerList();
    }

    pList = [
        {name: 'Fashion Sport', price: 16, img: 'assets/images/home/product1.png'},
        {name: 'Fashion Sport', price: 16, img: 'assets/images/home/product1.png'},
        {name: 'Fashion Sport', price: 16, img: 'assets/images/home/product1.png'},
        {name: 'Fashion Sport', price: 16, img: 'assets/images/home/product1.png'}
    ];

    ngOnInit() {
    }

    onPage(item) {
    }

}

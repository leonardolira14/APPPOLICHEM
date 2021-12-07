import {Component, ViewEncapsulation} from '@angular/core';
import {HomeService, ContentModel, ContentModel2, ContentModel3, ContentModel4} from '../../../shared';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePage {
    isActive = false;
    bannerList: Array<ContentModel>;
    list: Array<ContentModel2>;
    fList: Array<ContentModel3>;
    tList: Array<ContentModel4>;
    newList: Array<ContentModel>;
    model = {
        title: 'Modern and Clean Design',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ipsum dolor sit amet, consectetur adipisicing.'
    };

    constructor(private homeService: HomeService) {
        this.bannerList = this.homeService.getBannerList();
        this.list = this.homeService.getList();
        this.fList = this.homeService.getFList();
        this.tList = this.homeService.getTList();
        this.newList = this.homeService.getNewList();
    }

    toggle() {
        this.isActive = !this.isActive;
    }

}

import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentModel, HomeService} from '../../../shared';

@Component({
    selector: 'app-home-portfolio',
    templateUrl: './home-portfolio.page.html',
    styleUrls: ['./home-portfolio.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePortfolioPage implements OnInit {
    bannerList: Array<ContentModel>;
    mList = ['All', 'Ios', 'Android', 'Mobile'];
    gList = [];
    list = [];
    selectedItem = 'All';

    constructor(private homeService: HomeService) {
        this.bannerList = this.homeService.getBannerList();
        this.gList = this.homeService.getPList();
        this.list = this.gList;
    }

    ngOnInit() {
    }

    onSelect(item: string) {
        this.selectedItem = item;
        this.list = item === 'All' ? this.gList : this.gList.filter(g => g.cate === item);
    }

}

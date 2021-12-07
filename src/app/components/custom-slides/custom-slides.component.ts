import {Component, ViewEncapsulation} from '@angular/core';
import {ContentModel} from '../../shared/model';
import {HomeService} from '../../shared/api';

@Component({
    selector: 'custom-slides',
    templateUrl: './custom-slides.component.html',
    styleUrls: ['./custom-slides.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomSlidesComponent {
    bannerList: Array<ContentModel>;

    constructor(private homeService: HomeService) {
        this.bannerList = this.homeService.getBannerList();
    }
}

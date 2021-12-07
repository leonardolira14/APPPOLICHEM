import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ContentModel, HomeService} from '../../../shared';

@Component({
    selector: 'app-home-blog',
    templateUrl: './home-blog.page.html',
    styleUrls: ['./home-blog.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeBlogPage implements OnInit {
    bannerList: Array<ContentModel>;

    blogList = [
        {
            title: 'Build Your Ionic App',
            date: ' July 21, 2029',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
            img: 'assets/images/home/1.jpg'
        },
        {
            title: 'Build Your Ionic App',
            date: ' July 17, 2029',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
            img: 'assets/images/home/1.jpg'
        },
        {
            title: 'Build Your Ionic App',
            date: ' July 26, 2029',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
            img: 'assets/images/home/1.jpg'
        },
        {
            title: 'Build Your Ionic App',
            date: ' July 27, 2029',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.',
            img: 'assets/images/home/1.jpg'
        }
    ];

    constructor(private homeService: HomeService) {
        this.bannerList = this.homeService.getBannerList();
    }

    ngOnInit() {
    }

    onPage(event) {
        console.log(event);
    }

}

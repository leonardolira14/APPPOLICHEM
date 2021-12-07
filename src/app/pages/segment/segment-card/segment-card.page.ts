import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-segment-card',
    templateUrl: './segment-card.page.html',
    styleUrls: ['./segment-card.page.scss'],
})
export class SegmentCardPage implements OnInit {
    selected = 'Profile';
    segmentList = ['Profile', 'Blog', 'Product', 'Clothes'];
    user = {
        img: 'assets/images/avatar/11.jpg',
        name: 'Clara Congreve',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    list = [
        {
            img: 'assets/images/list/21.jpg',
            title: 'Angular News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/list/22.jpg',
            title: 'Ionic News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
        {
            img: 'assets/images/list/23.jpg',
            title: 'Android News',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
        },
    ];

    bList = [
        {
            name: 'Alva Bertram',
            avatar: 'assets/images/avatar/16.jpg',
            title: 'Ionic News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/31.jpg'
        },
        {
            name: 'Lena Walkley',
            avatar: 'assets/images/avatar/13.jpg',
            title: 'Android News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/32.jpg'
        },
        {
            name: 'Maud Oscar',
            avatar: 'assets/images/avatar/14.jpg',
            title: 'Angular News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/33.jpg'
        }
    ];
    bList1 = [
        {
            name: 'Alva Bertram',
            avatar: 'assets/images/avatar/16.jpg',
            title: 'Ionic News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/56.jpg'
        },
        {
            name: 'Lena Walkley',
            avatar: 'assets/images/avatar/13.jpg',
            title: 'Android News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/57.jpg'
        },
        {
            name: 'Maud Oscar',
            avatar: 'assets/images/avatar/14.jpg',
            title: 'Angular News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/59.jpg'
        }
    ];
    bList2 = [
        {
            name: 'Alva Bertram',
            avatar: 'assets/images/avatar/16.jpg',
            title: 'Ionic News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/61.jpg'
        },
        {
            name: 'Lena Walkley',
            avatar: 'assets/images/avatar/13.jpg',
            title: 'Android News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/62.jpg'
        },
        {
            name: 'Maud Oscar',
            avatar: 'assets/images/avatar/14.jpg',
            title: 'Angular News',
            subTitle: 'ionic',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img: 'assets/images/card/63.jpg'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

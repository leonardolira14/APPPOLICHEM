import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list-news',
    templateUrl: './list-news.page.html',
    styleUrls: ['./list-news.page.scss'],
})
export class ListNewsPage implements OnInit {
    list = [
        {
            avatar: 'assets/images/avatar/6.jpg',
            bgImg: 'assets/images/card/6.jpg',
            name: 'Caroline MacAdam',
            date: '21 August 2022 at 8:19pm',
            title: 'Halter Dress',
            subTitle: 'NEW ARRIVALS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            avatar: 'assets/images/avatar/2.jpg',
            bgImg: 'assets/images/card/2.jpg',
            name: 'Sandra Dewey',
            date: '20 August 2022 at 8:19pm',
            title: 'Cutout Dress',
            subTitle: 'NEW ARRIVALS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            avatar: 'assets/images/avatar/3.jpg',
            bgImg: 'assets/images/card/3.jpg',
            name: 'Irene Theresa',
            date: '22 August 2022 at 8:19pm',
            title: 'Fashion',
            subTitle: 'NEW ARRIVALS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            avatar: 'assets/images/avatar/4.jpg',
            bgImg: 'assets/images/card/4.jpg',
            name: 'Myrna Julius',
            date: '23 August 2022 at 8:19pm',
            title: 'Fashion',
            subTitle: 'NEW ARRIVALS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            avatar: 'assets/images/avatar/5.jpg',
            bgImg: 'assets/images/card/5.jpg',
            name: 'Trista Dorothea',
            date: '23 August 2022 at 8:19pm',
            title: 'Crop Top',
            subTitle: 'NEW ARRIVALS',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

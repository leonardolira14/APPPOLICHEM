import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-wrapper',
    templateUrl: './profile-wrapper.page.html',
    styleUrls: ['./profile-wrapper.page.scss'],
})
export class ProfileWrapperPage implements OnInit {
    list = [
        {
            avatar: 'assets/images/avatar/15.jpg',
            name: 'Antonia Cowper',
            time: '15min ago',
            img: 'assets/images/card/5.jpg',
            title: 'Ionic Template',
            content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 56,
            comments: 12
        },
        {
            avatar: 'assets/images/avatar/7.jpg',
            name: 'Janice Doris',
            time: '35min ago',
            img: 'assets/images/card/7.jpg',
            title: 'Angular',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 13,
            comments: 111
        },
        {
            avatar: 'assets/images/avatar/16.jpg',
            name: 'Gemma Gracie',
            time: '25min ago',
            img: 'assets/images/card/8.jpg',
            title: 'Cordova',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. ',
            likes: 67,
            comments: 123
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

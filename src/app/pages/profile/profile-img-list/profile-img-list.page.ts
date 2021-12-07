import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-img-list',
    templateUrl: './profile-img-list.page.html',
    styleUrls: ['./profile-img-list.page.scss'],
})
export class ProfileImgListPage implements OnInit {
    user = {
        bgImg: 'assets/images/profile/11.jpg',
        img: 'assets/images/avatar/3.jpg',
        name: 'Isabel Adelaide',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    fList = [
        'assets/images/avatar/1.jpg',
        'assets/images/avatar/2.jpg',
        'assets/images/avatar/3.jpg',
        'assets/images/avatar/4.jpg',
        'assets/images/avatar/5.jpg',
        'assets/images/avatar/6.jpg',
        'assets/images/avatar/7.jpg',
        'assets/images/avatar/8.jpg',
        'assets/images/avatar/9.jpg',
        'assets/images/avatar/10.jpg',
    ];
    imgList = [
        'assets/images/card/56.jpg',
        'assets/images/card/56.jpg',
        'assets/images/card/56.jpg',
        'assets/images/card/61.jpg',
        'assets/images/card/60.jpg',
        'assets/images/card/59.jpg',
        'assets/images/card/55.jpg',
        'assets/images/card/57.jpg',
        'assets/images/card/56.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

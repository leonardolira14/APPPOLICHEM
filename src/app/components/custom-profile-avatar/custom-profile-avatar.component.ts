import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'custom-profile-avatar',
    templateUrl: './custom-profile-avatar.component.html',
    styleUrls: ['./custom-profile-avatar.component.scss'],
})
export class CustomProfileAvatarComponent implements OnInit {
    user = {
        img: 'assets/images/avatar/7.jpg',
        name: 'Georgia Maurice',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    list = [
        {title: 'Ionic Framework News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
        {title: 'Ionic Framework News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
        {title: 'Ionic Framework News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

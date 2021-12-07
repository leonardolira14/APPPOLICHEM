import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'custom-profile-slide',
    templateUrl: './custom-profile-slide.component.html',
    styleUrls: ['./custom-profile-slide.component.scss'],
})
export class CustomProfileSlideComponent implements OnInit {
    img = 'assets/images/profile/5.jpg';
    user = {
        img: 'assets/images/avatar/11.jpg',
        name: 'Alexia Harrod',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'
    };

    list = [
        {title: 'Ionic Template News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
        {title: 'Ionic Template News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
        {title: 'Ionic Template News', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est.'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

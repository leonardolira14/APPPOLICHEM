import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile-list',
    templateUrl: './profile-list.page.html',
    styleUrls: ['./profile-list.page.scss'],
})
export class ProfileListPage implements OnInit {
    user = {
        img: 'assets/images/avatar/5.jpg', name: 'Emily'
    };

    list = [
        {icon: 'podium', name: 'Order'},
        {icon: 'notifications-outline', name: 'Notice'},
        {icon: 'card', name: 'Pay'},
        {icon: 'basket', name: 'Bag'},
        {icon: 'flame', name: 'Tops'},
        {icon: 'heart', name: 'Wish List'},
        {icon: 'pricetag', name: 'New'},
        {icon: 'md-person', name: 'Login'},
        {icon: 'help-circle-outline', name: 'Help'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

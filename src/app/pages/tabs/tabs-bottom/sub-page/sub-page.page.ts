import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sub-page',
    templateUrl: './sub-page.page.html',
    styleUrls: ['./sub-page.page.scss'],
})
export class SubPagePage implements OnInit {
    user = {
        bgImg: 'assets/images/profile/3.jpg',
        avatar: 'assets/images/avatar/15.jpg',
        name: 'Gladys Edgeworth',
        content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    };

    constructor() {
    }

    ngOnInit() {
    }

}

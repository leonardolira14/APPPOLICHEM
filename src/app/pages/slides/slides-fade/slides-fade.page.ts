import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides-fade',
    templateUrl: './slides-fade.page.html',
    styleUrls: ['./slides-fade.page.scss'],
})
export class SlidesFadePage implements OnInit {
    list = [
        'assets/images/card/5.jpg',
        'assets/images/card/8.jpg',
        'assets/images/card/7.jpg',
        'assets/images/card/6.jpg',
        'assets/images/card/1.jpg',
        'assets/images/card/2.jpg',
        'assets/images/card/3.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

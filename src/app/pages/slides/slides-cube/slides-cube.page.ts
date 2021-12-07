import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides-cube',
    templateUrl: './slides-cube.page.html',
    styleUrls: ['./slides-cube.page.scss'],
})
export class SlidesCubePage implements OnInit {
    list = [
        'assets/images/card/1.jpg',
        'assets/images/card/2.jpg',
        'assets/images/card/3.jpg',
        'assets/images/card/4.jpg',
        'assets/images/card/5.jpg',
        'assets/images/card/6.jpg',
        'assets/images/card/7.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

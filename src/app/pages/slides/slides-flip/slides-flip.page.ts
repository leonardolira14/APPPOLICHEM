import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides-flip',
    templateUrl: './slides-flip.page.html',
    styleUrls: ['./slides-flip.page.scss'],
})
export class SlidesFlipPage implements OnInit {
    list = [
        'assets/images/card/1.jpg',
        'assets/images/card/2.jpg',
        'assets/images/card/3.jpg',
        'assets/images/card/4.jpg',
        'assets/images/card/5.jpg',
        'assets/images/card/8.jpg',
        'assets/images/card/6.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

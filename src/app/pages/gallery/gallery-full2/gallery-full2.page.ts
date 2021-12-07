import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-gallery-full2',
    templateUrl: './gallery-full2.page.html',
    styleUrls: ['./gallery-full2.page.scss'],
})
export class GalleryFull2Page implements OnInit {
    list = [
        'assets/images/card/1.jpg',
        'assets/images/card/2.jpg',
        'assets/images/card/3.jpg',
        'assets/images/card/4.jpg',
        'assets/images/card/5.jpg'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slides-animation-coverflow',
    templateUrl: './slides-animation-coverflow.page.html',
    styleUrls: ['./slides-animation-coverflow.page.scss'],
})
export class SlidesAnimationCoverflowPage implements OnInit {
    list = [
        'assets/images/slides/bg1.jpg',
        'assets/images/slides/bg2.jpg',
        'assets/images/slides/bg3.jpg',
        'assets/images/slides/bg4.jpg',
        'assets/images/slides/bg5.jpg',
        'assets/images/slides/bg6.jpg',
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

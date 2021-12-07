import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-full-slides',
    templateUrl: './full-slides.page.html',
    styleUrls: ['./full-slides.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FullSlidesPage implements OnInit {
    list = [
        {title: 'Easy Customize', img: 'assets/images/slides/bg1.jpg'},
        {title: 'Welcome to Dark', img: 'assets/images/slides/bg2.jpg'},
        {title: 'Responsive Design', img: 'assets/images/slides/bg3.jpg'},
        {title: 'Responsive Design', img: 'assets/images/slides/bg4.jpg'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

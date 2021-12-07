import {Component, Input, OnInit} from '@angular/core';
import {slideOptsFlip, slidesOptsCoverflow, slidesOptsCube, slidesOptsFade} from '../custom-slides-animation/custom-slides-animation-model';

@Component({
    selector: 'custom-slides-news-card',
    templateUrl: './custom-slides-news-card.component.html',
    styleUrls: ['./custom-slides-news-card.component.scss'],
})
export class CustomSlidesNewsCardComponent implements OnInit {
    slideOpts: any;
    @Input() isPager = true;
    @Input() list: Array<string>;
    @Input() animation = 'Coverflow';
    @Input() isFull = false;

    constructor() {
    }

    ngOnInit() {
        switch (this.animation) {
            case 'coverflow':
                this.slideOpts = slidesOptsCoverflow;
                break;
            case 'cube':
                this.slideOpts = slidesOptsCube;
                break;
            case 'fade':
                this.slideOpts = slidesOptsFade;
                break;
            case 'flip':
                this.slideOpts = slideOptsFlip;
                break;
            default:
                this.slideOpts = slidesOptsCoverflow;
        }
    }
}

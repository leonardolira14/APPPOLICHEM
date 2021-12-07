import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'custom-full-slides',
    templateUrl: './custom-full-slides.component.html',
    styleUrls: ['./custom-full-slides.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomFullSlidesComponent {
    @Input() list = [];

    constructor() {
    }

}

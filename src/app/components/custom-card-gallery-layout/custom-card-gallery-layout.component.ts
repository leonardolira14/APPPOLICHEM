import {Component, Input} from '@angular/core';

@Component({
    selector: 'custom-card-gallery-layout',
    templateUrl: './custom-card-gallery-layout.component.html',
    styleUrls: ['./custom-card-gallery-layout.component.scss'],
})
export class CustomCardGalleryLayoutComponent {
    @Input() list: Array<string>;

    constructor() {
    }
}

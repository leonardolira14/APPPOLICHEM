import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'custom-gallery-layout2',
    templateUrl: './custom-gallery-layout2.component.html',
    styleUrls: ['./custom-gallery-layout2.component.scss'],
})
export class CustomGalleryLayout2Component implements OnInit {
    @Input() list: any;
    @Output() onSelect = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item) {
        this.onSelect.emit(item);
    }
}

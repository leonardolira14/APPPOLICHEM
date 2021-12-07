import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomGalleryModel} from './custom-gallery-model';
import {CardModelLayout} from '../../shared/model';

@Component({
    selector: 'custom-gallery-layout',
    templateUrl: './custom-gallery-layout.component.html',
    styleUrls: ['./custom-gallery-layout.component.scss'],
})
export class CustomGalleryLayoutComponent implements OnInit {
    @Input() list: Array<CustomGalleryModel>;
    @Output() onSelect = new EventEmitter<CustomGalleryModel>();
    constructor() {
    }

    ngOnInit() {
    }

    onClick(item) {
        this.onSelect.emit(item);
    }

}

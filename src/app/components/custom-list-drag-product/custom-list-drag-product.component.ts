import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from './product.model';

@Component({
    selector: 'custom-list-drag-product',
    templateUrl: './custom-list-drag-product.component.html',
    styleUrls: ['./custom-list-drag-product.component.scss'],
})
export class CustomListDragProductComponent implements OnInit {
    @Input() list: Array<ProductModel>;
    @Output() doReorder = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onReorder(event) {
        this.doReorder.emit(event);
    }

}

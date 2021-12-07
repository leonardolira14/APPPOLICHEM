import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../custom-list-drag-product/product.model';

@Component({
    selector: 'custom-list-sliding-product',
    templateUrl: './custom-list-sliding-product.component.html',
    styleUrls: ['./custom-list-sliding-product.component.scss'],
})
export class CustomListSlidingProductComponent implements OnInit {
    @Input() list: Array<ProductModel>;
    @Output() onFollow = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }

    follow(title: string) {
        this.onFollow.emit(title);
    }

    onDel(item, slidingItem) {
        this.list = this.list.filter(s => s.title !== item.title);
        slidingItem.close();
    }
}

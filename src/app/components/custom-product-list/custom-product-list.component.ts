import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../custom-list-drag-product/product.model';

@Component({
    selector: 'custom-product-list',
    templateUrl: './custom-product-list.component.html',
    styleUrls: ['./custom-product-list.component.scss'],
})
export class CustomProductListComponent implements OnInit {
    @Input() isList = true;
    @Input() list: Array<ProductModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

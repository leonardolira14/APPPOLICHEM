import {Component, Input, OnInit} from '@angular/core';
import {CardProductModel} from './card-product.model';

@Component({
    selector: 'custom-card-list-product',
    templateUrl: './custom-card-list-product.component.html',
    styleUrls: ['./custom-card-list-product.component.scss'],
})
export class CustomCardListProductComponent implements OnInit {
    @Input() list: Array<CardProductModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

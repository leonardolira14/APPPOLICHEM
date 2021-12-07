import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardReserveModel} from './card-reserve.model';

@Component({
    selector: 'custom-card-reserve',
    templateUrl: './custom-card-reserve.component.html',
    styleUrls: ['./custom-card-reserve.component.scss'],
})
export class CustomCardReserveComponent implements OnInit {
    @Input() list: Array<CardReserveModel>;
    @Output() onSelect = new EventEmitter<CardReserveModel>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item: CardReserveModel) {
        this.onSelect.emit(item);
    }

}

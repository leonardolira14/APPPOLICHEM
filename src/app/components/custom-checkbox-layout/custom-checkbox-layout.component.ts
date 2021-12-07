import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckboxModel} from './checkbox.model';

@Component({
    selector: 'custom-checkbox-layout',
    templateUrl: './custom-checkbox-layout.component.html',
    styleUrls: ['./custom-checkbox-layout.component.scss'],
})
export class CustomCheckboxLayoutComponent implements OnInit {
    @Input() list: Array<CheckboxModel>;
    @Output() onCheck = new EventEmitter<CheckboxModel>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item: CheckboxModel) {
        this.onCheck.emit(item);
    }
}

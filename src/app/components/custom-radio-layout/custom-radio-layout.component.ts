import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RadiogroupModel} from './radiogroup.model';

@Component({
    selector: 'custom-radio-layout',
    templateUrl: './custom-radio-layout.component.html',
    styleUrls: ['./custom-radio-layout.component.scss'],
})
export class CustomRadioLayoutComponent implements OnInit {
    @Input() list: Array<RadiogroupModel>;
    @Output() onCheck = new EventEmitter<RadiogroupModel>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item: RadiogroupModel) {
        this.onCheck.emit(item);
    }
}

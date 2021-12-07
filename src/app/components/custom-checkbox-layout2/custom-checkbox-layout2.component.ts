import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckboxImgModel} from './checkbox-img.model';

@Component({
    selector: 'custom-checkbox-layout2',
    templateUrl: './custom-checkbox-layout2.component.html',
    styleUrls: ['./custom-checkbox-layout2.component.scss'],
})
export class CustomCheckboxLayout2Component implements OnInit {
    @Input() list: Array<CheckboxImgModel>;
    @Output() onCheck = new EventEmitter<CheckboxImgModel>();

    constructor() {
    }

    ngOnInit() {
    }

    onClick(item: CheckboxImgModel) {
        this.onCheck.emit(item);
    }
}

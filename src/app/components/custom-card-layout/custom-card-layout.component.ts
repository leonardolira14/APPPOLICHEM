import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {CardModelLayout} from '../../shared/model';

@Component({
    selector: 'custom-card-layout',
    templateUrl: './custom-card-layout.component.html',
    styleUrls: ['./custom-card-layout.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCardLayoutComponent {
    @Input() list: Array<CardModelLayout>;
    @Output() onSelect = new EventEmitter<CardModelLayout>();

    constructor() {
    }

    onClick(item: CardModelLayout) {
        this.onSelect.emit(item);
    }
}

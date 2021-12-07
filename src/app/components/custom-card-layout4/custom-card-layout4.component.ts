import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {CardModelComment} from '../../shared/model';

@Component({
    selector: 'custom-card-layout4',
    templateUrl: './custom-card-layout4.component.html',
    styleUrls: ['./custom-card-layout4.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCardLayout4Component {
    @Input() list: Array<CardModelComment>;

    constructor() {
    }
}

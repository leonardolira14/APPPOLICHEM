import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModel} from '../../shared/model';

@Component({
    selector: 'custom-card-layout2',
    templateUrl: './custom-card-layout2.component.html',
    styleUrls: ['./custom-card-layout2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCardLayout2Component implements OnInit {
    @Input() list: Array<CardModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

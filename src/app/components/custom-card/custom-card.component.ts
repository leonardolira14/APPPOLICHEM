import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CardModel} from '../../shared/model';

@Component({
    selector: 'custom-card',
    templateUrl: './custom-card.component.html',
    styleUrls: ['./custom-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CustomCardComponent implements OnInit {
    @Input() list: Array<CardModel>;

    constructor() {

    }

    ngOnInit() {
        this.list = this.list.map(item => item = Object.assign({active: false, ...item}));
    }

}

import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'custom-card-layout3',
    templateUrl: './custom-card-layout3.component.html',
    styleUrls: ['./custom-card-layout3.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCardLayout3Component implements OnInit {
    @Input() list: any;

    constructor() {
    }

    ngOnInit() {
    }

}

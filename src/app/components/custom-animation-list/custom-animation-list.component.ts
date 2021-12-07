import {Component, Input, OnInit} from '@angular/core';
import {AnimationListModel} from './animation-list.model';

@Component({
    selector: 'custom-animation-list',
    templateUrl: './custom-animation-list.component.html',
    styleUrls: ['./custom-animation-list.component.scss'],
})
export class CustomAnimationListComponent implements OnInit {
    @Input() animationClassName: string;
    @Input() list: Array<AnimationListModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

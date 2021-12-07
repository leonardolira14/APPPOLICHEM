import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'custom-skeleton-list',
    templateUrl: './custom-skeleton-list.component.html',
    styleUrls: ['./custom-skeleton-list.component.scss'],
})
export class CustomSkeletonListComponent implements OnInit {
    list = [1];

    @Input() set rows(val: number) {
        this.list = Array.from({length: val}, (v, i) => i);
    }

    constructor() {
    }

    ngOnInit() {
    }

}

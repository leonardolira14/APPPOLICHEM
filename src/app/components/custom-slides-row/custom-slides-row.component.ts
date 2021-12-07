import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'custom-slides-row',
    templateUrl: './custom-slides-row.component.html',
    styleUrls: ['./custom-slides-row.component.scss'],
})
export class CustomSlidesRowComponent implements OnInit {
    @Input() list: any;

    constructor() {
    }

    ngOnInit() {
    }

}

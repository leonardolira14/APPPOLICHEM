import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'custom-profile-basic',
    templateUrl: './custom-profile-basic.component.html',
    styleUrls: ['./custom-profile-basic.component.scss'],
})
export class CustomProfileBasicComponent implements OnInit {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }

    ngOnInit() {
    }

}

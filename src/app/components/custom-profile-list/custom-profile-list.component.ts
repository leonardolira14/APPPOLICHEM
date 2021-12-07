import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'custom-profile-list',
    templateUrl: './custom-profile-list.component.html',
    styleUrls: ['./custom-profile-list.component.scss'],
})
export class CustomProfileListComponent implements OnInit {
    @Input() user: any;
    @Input() list: any;

    constructor() {
    }

    ngOnInit() {
    }

}

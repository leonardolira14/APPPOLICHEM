import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-custom-profile-img-list',
    templateUrl: './custom-profile-img-list.component.html',
    styleUrls: ['./custom-profile-img-list.component.scss'],
})
export class CustomProfileImgListComponent implements OnInit {
    active = false;
    @Input() user: any;
    @Input() fList = [];
    @Input() imgList = [];

    constructor() {
    }

    ngOnInit() {
    }

    toggle() {
        this.active = !this.active;
    }

}

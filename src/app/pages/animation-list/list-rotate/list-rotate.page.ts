import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-list-rotate',
    templateUrl: './list-rotate.page.html',
    styleUrls: ['./list-rotate.page.scss'],
})
export class ListRotatePage implements OnInit {
    animationClassName = 'rotate-in-2-cw';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}

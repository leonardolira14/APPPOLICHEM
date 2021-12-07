import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-slide-list',
    templateUrl: './slide-list.page.html',
    styleUrls: ['./slide-list.page.scss'],
})
export class SlideListPage implements OnInit {
    animationClassName = 'slide-in-right';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }
    ngOnInit() {
    }

}

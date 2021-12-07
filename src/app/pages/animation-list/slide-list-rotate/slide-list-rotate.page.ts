import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-slide-list-rotate',
    templateUrl: './slide-list-rotate.page.html',
    styleUrls: ['./slide-list-rotate.page.scss'],
})
export class SlideListRotatePage implements OnInit {
    animationClassName = 'rotate-in-center';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}

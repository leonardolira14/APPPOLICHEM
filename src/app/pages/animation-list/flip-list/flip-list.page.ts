import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-flip-list',
    templateUrl: './flip-list.page.html',
    styleUrls: ['./flip-list.page.scss'],
})
export class FlipListPage implements OnInit {
    animationClassName = 'flip-in-ver-right';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}

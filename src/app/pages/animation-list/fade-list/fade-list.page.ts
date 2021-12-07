import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-fade-list',
    templateUrl: './fade-list.page.html',
    styleUrls: ['./fade-list.page.scss'],
})
export class FadeListPage implements OnInit {
    animationClassName = 'fade-in-left';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}

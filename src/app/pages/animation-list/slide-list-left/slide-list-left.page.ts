import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-slide-list-left',
    templateUrl: './slide-list-left.page.html',
    styleUrls: ['./slide-list-left.page.scss'],
})
export class SlideListLeftPage implements OnInit {
    animationClassName = 'slide-in-left';
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }


    ngOnInit() {
    }

}

import {Component, OnInit} from '@angular/core';
import {UserModel, UserService} from '../../../shared';

@Component({
    selector: 'app-list-comment',
    templateUrl: './list-comment.page.html',
    styleUrls: ['./list-comment.page.scss'],
})
export class ListCommentPage implements OnInit {
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }
}

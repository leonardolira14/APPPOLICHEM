import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-list-comment-timeline',
    templateUrl: './list-comment-timeline.page.html',
    styleUrls: ['./list-comment-timeline.page.scss'],
})
export class ListCommentTimelinePage implements OnInit {
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

}

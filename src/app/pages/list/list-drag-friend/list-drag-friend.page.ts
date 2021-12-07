import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
    selector: 'app-list-drag-friend',
    templateUrl: './list-drag-friend.page.html',
    styleUrls: ['./list-drag-friend.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ListDragFriendPage implements OnInit {
    list: Array<UserModel>;

    constructor(private service: UserService) {
        this.list = this.service.getList();
    }

    ngOnInit() {
    }

    doReorder(ev: any) {
        console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
        ev.detail.complete();
    }
}

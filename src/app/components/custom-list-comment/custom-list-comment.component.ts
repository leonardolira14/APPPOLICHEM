import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'custom-list-comment',
    templateUrl: './custom-list-comment.component.html',
    styleUrls: ['./custom-list-comment.component.scss'],
})
export class CustomListCommentComponent implements OnInit {
    @Input() list: any;

    constructor() {
    }

    ngOnInit() {
    }

}

import {Component, Input, OnInit} from '@angular/core';
import {CustomCardBlogModel} from './custom-card-blog.model';

@Component({
    selector: 'custom-card-blog',
    templateUrl: './custom-card-blog.component.html',
    styleUrls: ['./custom-card-blog.component.scss'],
})
export class CustomCardBlogComponent implements OnInit {
    @Input() list: Array<CustomCardBlogModel>;
    @Input() isHead = false;
    @Input() middle = true;

    constructor() {
    }

    ngOnInit() {
    }

}

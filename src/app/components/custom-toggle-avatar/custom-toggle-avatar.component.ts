import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'custom-toggle-avatar',
    templateUrl: './custom-toggle-avatar.component.html',
    styleUrls: ['./custom-toggle-avatar.component.scss'],
})
export class CustomToggleAvatarComponent implements OnInit {
    @Input() list: any;
    @Output() onChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    change(item) {
        this.onChange.emit(item);
    }

}

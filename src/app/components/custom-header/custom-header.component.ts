import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'custom-header',
    templateUrl: './custom-header.component.html',
    styleUrls: ['./custom-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomHeaderComponent {
    isActive = false;
    @Input() title = 'Home';
    @Output() onSearch = new EventEmitter();

    constructor() {
    }

    toggle() {
        this.isActive = !this.isActive;
    }

    search(event) {
        this.onSearch.emit(event);
    }
}

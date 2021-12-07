import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'custom-pagination',
    templateUrl: './custom-pagination.component.html',
    styleUrls: ['./custom-pagination.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomPaginationComponent {
    selectIndex = 0;
    @Input() pageData = [];
    // tslint:disable-next-line:no-output-on-prefix
    @Output() onPage = new EventEmitter<number>();

    constructor() {
    }

    onPagination(index: number) {
        this.selectIndex = index;
        this.onPage.emit(index);

    }
}

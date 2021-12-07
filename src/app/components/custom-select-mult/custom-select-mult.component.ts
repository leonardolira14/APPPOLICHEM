import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-select-mult',
    templateUrl: './custom-select-mult.component.html',
    styleUrls: ['./custom-select-mult.component.scss'],
})
export class CustomSelectMultComponent implements OnInit {
    selected = 'Bacon';
    list = ['Bacon', 'Black Olives', 'Extra Cheese', 'Green Peppers', 'Mushrooms'];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onSelect() {
        this.toastProvider.show(this.selected);
    }
}

import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-select-popover',
    templateUrl: './custom-select-popover.component.html',
    styleUrls: ['./custom-select-popover.component.scss']
})
export class CustomSelectPopoverComponent implements OnInit {
    selected = 'NES';
    list = ['NES', 'PlayStation', 'Sega Saturn', 'SNES'];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    selectGame() {
        this.toastProvider.show(this.selected);
    }
}

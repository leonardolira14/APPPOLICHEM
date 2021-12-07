import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-select-sheet',
    templateUrl: './custom-select-sheet.component.html',
    styleUrls: ['./custom-select-sheet.component.scss'],
})
export class CustomSelectSheetComponent implements OnInit {
    selected = 'Enable';
    list = ['Enable', 'Mute', 'Mute for a week', 'Mute for a year'];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onSelect() {
        this.toastProvider.show(this.selected);
    }
}

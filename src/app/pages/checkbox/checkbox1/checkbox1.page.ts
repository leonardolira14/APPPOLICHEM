import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
    selector: 'app-checkbox1',
    templateUrl: './checkbox1.page.html',
    styleUrls: ['./checkbox1.page.scss'],
})
export class Checkbox1Page implements OnInit {
    list = [
        {id: 1, title: 'Liz Bess', checked: false},
        {id: 2, title: 'Gail Hume', checked: false},
        {id: 3, title: 'Kelly Sam', checked: false},
        {id: 4, title: 'Melissa Clemens', checked: false},
        {id: 5, title: 'Gemma Gracie', checked: false},
        {id: 6, title: 'Hilary Jackson', checked: false},
        {id: 7, title: 'Salome Ramsden', checked: false},
        {id: 8, title: 'Yedda Hosea', checked: false}
    ];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    onCheck(item) {
        this.toastProvider.show(JSON.stringify(item));
    }

}

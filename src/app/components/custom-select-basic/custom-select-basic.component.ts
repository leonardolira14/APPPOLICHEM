import {Component, OnInit} from '@angular/core';
import {ToastProvider} from '../../shared/providers';

@Component({
    selector: 'custom-select-basic',
    templateUrl: './custom-select-basic.component.html',
    styleUrls: ['./custom-select-basic.component.scss'],
})
export class CustomSelectBasicComponent implements OnInit {
    selectedCity: string;
    cityList = ['New York', 'Tokyo', 'Chicago', 'Kingston', 'Moscow', 'Paris', 'Berlin'];

    constructor(private toastProvider: ToastProvider) {
    }

    ngOnInit() {
    }

    selectCity() {
        this.toastProvider.show(this.selectedCity);
    }

}

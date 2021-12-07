import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.page.html',
    styleUrls: ['./spinner.page.scss'],
})
export class SpinnerPage implements OnInit {
    list = [
        {name: 'crescent', color: 'warning'},
        {name: 'lines', color: 'success'},
        {name: 'lines-small', color: 'danger'},
        {name: 'dots', color: 'tertiary'},
        {name: 'bubbles', color: 'secondary'},
        {name: 'circles', color: 'danger'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

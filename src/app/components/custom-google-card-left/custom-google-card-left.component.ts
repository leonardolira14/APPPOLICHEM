import {Component, Input, OnInit} from '@angular/core';
import {CustomGoogleCardModel} from './custom-google-card.model';

@Component({
    selector: 'custom-google-card-left',
    templateUrl: './custom-google-card-left.component.html',
    styleUrls: ['./custom-google-card-left.component.scss'],
})
export class CustomGoogleCardLeftComponent implements OnInit {
    @Input() list: Array<CustomGoogleCardModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

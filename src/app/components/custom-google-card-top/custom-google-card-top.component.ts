import {Component, Input, OnInit} from '@angular/core';
import {CustomGoogleCardModel} from '../custom-google-card-left/custom-google-card.model';

@Component({
    selector: 'custom-google-card-top',
    templateUrl: './custom-google-card-top.component.html',
    styleUrls: ['./custom-google-card-top.component.scss'],
})
export class CustomGoogleCardTopComponent implements OnInit {
    @Input() list: Array<CustomGoogleCardModel>;

    constructor() {
    }

    ngOnInit() {
    }

}

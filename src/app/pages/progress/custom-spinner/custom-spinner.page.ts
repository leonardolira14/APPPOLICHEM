import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-custom-spinner',
    templateUrl: './custom-spinner.page.html',
    styleUrls: ['./custom-spinner.page.scss'],
})
export class CustomSpinnerPage implements OnInit {
    list = [
        'azure-round-loader',
        'Ball',
        'bar-chart-preloader',
        'Blocks',
        'circle-slack-loading-icon',
        'comet-spinner',
        'curved-bar-spinner',
        'Disk',
        'DoubleRing',
        'DualRing',
        'earth-globe-map-spinner'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}

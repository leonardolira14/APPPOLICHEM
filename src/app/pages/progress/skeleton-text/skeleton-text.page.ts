import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';

@Component({
    selector: 'app-skeleton-text',
    templateUrl: './skeleton-text.page.html',
    styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {
    text: string;
    img: string;

    constructor() {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        timer(3000).subscribe(r => {
            this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula';
            this.img = 'assets/images/card/60.jpg';
        });
    }

}

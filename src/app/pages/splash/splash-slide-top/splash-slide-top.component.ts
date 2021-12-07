import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-splash-slide-top',
    templateUrl: './splash-slide-top.component.html',
    styleUrls: ['./splash-slide-top.component.scss'],
})
export class SplashSlideTopComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        timer(3000).subscribe(r => {
            this.modalCtrl.dismiss();
        });
    }

}

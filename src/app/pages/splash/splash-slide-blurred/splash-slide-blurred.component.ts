import {Component, OnInit} from '@angular/core';
import {timer} from 'rxjs';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-splash-slide-blurred',
    templateUrl: './splash-slide-blurred.component.html',
    styleUrls: ['./splash-slide-blurred.component.scss'],
})
export class SplashSlideBlurredComponent implements OnInit {

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
        timer(3000).subscribe(r => {
            this.modalCtrl.dismiss();
        });
    }

}

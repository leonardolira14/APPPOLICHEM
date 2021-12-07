import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {timer} from 'rxjs';

@Component({
  selector: 'app-splash-slide3',
  templateUrl: './splash-slide3.component.html',
  styleUrls: ['./splash-slide3.component.scss'],
})
export class SplashSlide3Component implements OnInit {

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    timer(3000).subscribe(r => {
      this.modalCtrl.dismiss();
    });
  }
}

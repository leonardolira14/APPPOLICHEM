import { Component, Input, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
@Input() title:string = '';
  constructor(
    private menu: MenuController
  ) { }

  ngOnInit() {}
  onMenu() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
}
}

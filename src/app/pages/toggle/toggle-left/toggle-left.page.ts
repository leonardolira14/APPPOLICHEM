import { Component, OnInit } from '@angular/core';
import {ToastProvider} from '../../../shared/providers';

@Component({
  selector: 'app-toggle-left',
  templateUrl: './toggle-left.page.html',
  styleUrls: ['./toggle-left.page.scss'],
})
export class ToggleLeftPage implements OnInit {
  list = [
    {id: 1, title: 'Eartha Bruce', subTitle: 'Eartha', img: 'assets/images/avatar/2.jpg', checked: true},
    {id: 2, title: 'Camille Lytton', subTitle: 'Camille', img: 'assets/images/avatar/3.jpg', checked: true},
    {id: 3, title: 'Nina Wright', subTitle: 'Nina', img: 'assets/images/avatar/4.jpg', checked: true},
    {id: 4, title: 'Gustave Johnny', subTitle: 'Gustave', img: 'assets/images/avatar/11.jpg', checked: false},
    {id: 5, title: 'Marguerite Babbitt', subTitle: 'Marguerite', img: 'assets/images/avatar/6.jpg', checked: true},
    {id: 6, title: 'Rose Morgan', subTitle: 'Rose', img: 'assets/images/avatar/7.jpg', checked: false},
    {id: 7, title: 'Samantha Dewar', subTitle: 'Samantha', img: 'assets/images/avatar/8.jpg', checked: true},
    {id: 8, title: 'Adela Lambert', subTitle: 'Adela', img: 'assets/images/avatar/9.jpg', checked: true}
  ];

  constructor(private toastProvider: ToastProvider) {
  }

  ngOnInit() {
  }

  onChange(item) {
    this.toastProvider.show('onChange ' + JSON.stringify(item));
  }

}

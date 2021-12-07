import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-list3',
  templateUrl: './profile-list3.page.html',
  styleUrls: ['./profile-list3.page.scss'],
})
export class ProfileList3Page implements OnInit {
  user = {
    img: 'assets/images/avatar/5.jpg', name: 'Emily'
  };

  list = [
    {icon: 'podium', name: 'Order'},
    {icon: 'notifications-outline', name: 'Notice'},
    {icon: 'card', name: 'Pay'},
    {icon: 'basket', name: 'Bag'},
    {icon: 'flame', name: 'Tops'},
    {icon: 'heart', name: 'Wish List'},
    {icon: 'pricetag', name: 'New'},
    {icon: 'md-person', name: 'Login'},
    {icon: 'help-circle-outline', name: 'Help'},
  ];
  constructor() { }

  ngOnInit() {
  }

}

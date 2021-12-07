import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
  selector: 'app-list-swirl',
  templateUrl: './list-swirl.page.html',
  styleUrls: ['./list-swirl.page.scss'],
})
export class ListSwirlPage implements OnInit {
  animationClassName = 'swirl-in-fwd';
  list: Array<UserModel>;

  constructor(private service: UserService) {
    this.list = this.service.getList();
  }


  ngOnInit() {
  }

}

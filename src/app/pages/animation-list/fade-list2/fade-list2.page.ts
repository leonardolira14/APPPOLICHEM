import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../shared/model';
import {UserService} from '../../../shared/api';

@Component({
  selector: 'app-fade-list2',
  templateUrl: './fade-list2.page.html',
  styleUrls: ['./fade-list2.page.scss'],
})
export class FadeList2Page implements OnInit {
  animationClassName = 'fade-in-bl';
  list: Array<UserModel>;

  constructor(private service: UserService) {
    this.list = this.service.getList();
  }


  ngOnInit() {
  }

}

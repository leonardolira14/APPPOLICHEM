import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-profile-list2',
  templateUrl: './custom-profile-list2.component.html',
  styleUrls: ['./custom-profile-list2.component.scss'],
})
export class CustomProfileList2Component implements OnInit {
  @Input() user: any;
  @Input() list: any;
  constructor() { }

  ngOnInit() {}

}

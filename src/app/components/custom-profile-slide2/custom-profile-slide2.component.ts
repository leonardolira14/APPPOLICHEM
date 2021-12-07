import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-profile-slide2',
  templateUrl: './custom-profile-slide2.component.html',
  styleUrls: ['./custom-profile-slide2.component.scss'],
})
export class CustomProfileSlide2Component implements OnInit {
  @Input() user: any;
  @Input() list: any;
  constructor() { }

  ngOnInit() {}

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-profile-grid',
  templateUrl: './custom-profile-grid.component.html',
  styleUrls: ['./custom-profile-grid.component.scss'],
})
export class CustomProfileGridComponent implements OnInit {
  @Input() user: any;
  @Input() list: any;
  constructor() { }

  ngOnInit() {}

}

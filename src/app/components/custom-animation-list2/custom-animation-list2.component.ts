import {Component, Input, OnInit} from '@angular/core';
import {AnimationListModel} from '../custom-animation-list/animation-list.model';

@Component({
  selector: 'custom-animation-list2',
  templateUrl: './custom-animation-list2.component.html',
  styleUrls: ['./custom-animation-list2.component.scss'],
})
export class CustomAnimationList2Component implements OnInit {
  @Input() animationClassName: string;
  @Input() list: Array<AnimationListModel>;

  constructor() { }

  ngOnInit() {}

}

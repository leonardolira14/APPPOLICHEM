import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'custom-list-comment-timeline',
  templateUrl: './custom-list-comment-timeline.component.html',
  styleUrls: ['./custom-list-comment-timeline.component.scss'],
})
export class CustomListCommentTimelineComponent implements OnInit {
  @Input() list: any;
  constructor() { }

  ngOnInit() {}

}

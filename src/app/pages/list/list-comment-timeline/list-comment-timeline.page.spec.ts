import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommentTimelinePage } from './list-comment-timeline.page';

describe('ListCommentTimelinePage', () => {
  let component: ListCommentTimelinePage;
  let fixture: ComponentFixture<ListCommentTimelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommentTimelinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommentTimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragFriendPage } from './list-drag-friend.page';

describe('ListDragFriendPage', () => {
  let component: ListDragFriendPage;
  let fixture: ComponentFixture<ListDragFriendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDragFriendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDragFriendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

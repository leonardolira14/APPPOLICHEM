import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSlidingLeftPage } from './list-sliding-left.page';

describe('ListSlidingLeftPage', () => {
  let component: ListSlidingLeftPage;
  let fixture: ComponentFixture<ListSlidingLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlidingLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSlidingLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSlidingPage } from './list-sliding.page';

describe('ListSlidingPage', () => {
  let component: ListSlidingPage;
  let fixture: ComponentFixture<ListSlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlidingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

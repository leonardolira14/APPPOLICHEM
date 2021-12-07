import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSwirlPage } from './list-swirl.page';

describe('ListSwirlPage', () => {
  let component: ListSwirlPage;
  let fixture: ComponentFixture<ListSwirlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSwirlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSwirlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

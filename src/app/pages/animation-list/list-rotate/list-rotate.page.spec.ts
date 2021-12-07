import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRotatePage } from './list-rotate.page';

describe('ListRotatePage', () => {
  let component: ListRotatePage;
  let fixture: ComponentFixture<ListRotatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRotatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRotatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

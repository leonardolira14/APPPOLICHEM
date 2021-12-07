import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragPage } from './list-drag.page';

describe('ListDragPage', () => {
  let component: ListDragPage;
  let fixture: ComponentFixture<ListDragPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDragPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDragPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

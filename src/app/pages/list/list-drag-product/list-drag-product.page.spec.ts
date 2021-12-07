import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDragProductPage } from './list-drag-product.page';

describe('ListDragProductPage', () => {
  let component: ListDragProductPage;
  let fixture: ComponentFixture<ListDragProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDragProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDragProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSlidingProductPage } from './list-sliding-product.page';

describe('ListSlidingProductPage', () => {
  let component: ListSlidingProductPage;
  let fixture: ComponentFixture<ListSlidingProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSlidingProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSlidingProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

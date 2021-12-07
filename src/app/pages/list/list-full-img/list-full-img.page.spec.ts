import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFullImgPage } from './list-full-img.page';

describe('ListFullImgPage', () => {
  let component: ListFullImgPage;
  let fixture: ComponentFixture<ListFullImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFullImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFullImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryList1Page } from './gallery-list1.page';

describe('GalleryList1Page', () => {
  let component: GalleryList1Page;
  let fixture: ComponentFixture<GalleryList1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryList1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryList1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

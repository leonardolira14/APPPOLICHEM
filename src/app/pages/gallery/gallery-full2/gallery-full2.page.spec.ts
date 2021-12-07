import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFull2Page } from './gallery-full2.page';

describe('GalleryFull2Page', () => {
  let component: GalleryFull2Page;
  let fixture: ComponentFixture<GalleryFull2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryFull2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryFull2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

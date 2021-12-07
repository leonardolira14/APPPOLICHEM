import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryHomePage } from './gallery-home.page';

describe('GalleryHomePage', () => {
  let component: GalleryHomePage;
  let fixture: ComponentFixture<GalleryHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

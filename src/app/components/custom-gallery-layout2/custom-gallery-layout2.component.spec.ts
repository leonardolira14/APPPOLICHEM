import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGalleryLayout2Component } from './custom-gallery-layout2.component';

describe('CustomGalleryLayout2Component', () => {
  let component: CustomGalleryLayout2Component;
  let fixture: ComponentFixture<CustomGalleryLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomGalleryLayout2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomGalleryLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

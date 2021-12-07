import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideListRotatePage } from './slide-list-rotate.page';

describe('SlideListRotatePage', () => {
  let component: SlideListRotatePage;
  let fixture: ComponentFixture<SlideListRotatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideListRotatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideListRotatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

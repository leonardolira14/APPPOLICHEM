import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideListLeftPage } from './slide-list-left.page';

describe('SlideListLeftPage', () => {
  let component: SlideListLeftPage;
  let fixture: ComponentFixture<SlideListLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideListLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideListLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

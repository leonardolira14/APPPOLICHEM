import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesFadePage } from './slides-fade.page';

describe('SlidesFadePage', () => {
  let component: SlidesFadePage;
  let fixture: ComponentFixture<SlidesFadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesFadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesFadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

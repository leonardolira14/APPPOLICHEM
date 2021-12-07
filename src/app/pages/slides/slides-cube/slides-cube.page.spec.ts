import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesCubePage } from './slides-cube.page';

describe('SlidesCubePage', () => {
  let component: SlidesCubePage;
  let fixture: ComponentFixture<SlidesCubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesCubePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesCubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

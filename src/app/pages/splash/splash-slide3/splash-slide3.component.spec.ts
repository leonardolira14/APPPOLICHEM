import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSlide3Component } from './splash-slide3.component';

describe('SplashSlide3Component', () => {
  let component: SplashSlide3Component;
  let fixture: ComponentFixture<SplashSlide3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashSlide3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashSlide3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

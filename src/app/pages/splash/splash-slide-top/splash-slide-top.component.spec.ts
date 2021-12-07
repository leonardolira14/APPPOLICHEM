import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSlideTopComponent } from './splash-slide-top.component';

describe('SplashSlideTopComponent', () => {
  let component: SplashSlideTopComponent;
  let fixture: ComponentFixture<SplashSlideTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashSlideTopComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashSlideTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

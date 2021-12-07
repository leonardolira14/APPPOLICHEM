import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashSlideBlurredComponent } from './splash-slide-blurred.component';

describe('SplashSlideBlurredComponent', () => {
  let component: SplashSlideBlurredComponent;
  let fixture: ComponentFixture<SplashSlideBlurredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashSlideBlurredComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashSlideBlurredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

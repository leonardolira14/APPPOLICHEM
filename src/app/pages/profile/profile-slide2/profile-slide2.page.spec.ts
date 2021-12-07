import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSlide2Page } from './profile-slide2.page';

describe('ProfileSlide2Page', () => {
  let component: ProfileSlide2Page;
  let fixture: ComponentFixture<ProfileSlide2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSlide2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSlide2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

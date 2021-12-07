import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVideoPage } from './login-video.page';

describe('LoginVideoPage', () => {
  let component: LoginVideoPage;
  let fixture: ComponentFixture<LoginVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

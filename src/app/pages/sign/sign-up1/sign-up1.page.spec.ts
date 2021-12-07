import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp1Page } from './sign-up1.page';

describe('SignUp1Page', () => {
  let component: SignUp1Page;
  let fixture: ComponentFixture<SignUp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

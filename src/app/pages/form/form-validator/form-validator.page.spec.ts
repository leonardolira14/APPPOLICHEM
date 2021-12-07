import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatorPage } from './form-validator.page';

describe('FormValidatorPage', () => {
  let component: FormValidatorPage;
  let fixture: ComponentFixture<FormValidatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidatorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

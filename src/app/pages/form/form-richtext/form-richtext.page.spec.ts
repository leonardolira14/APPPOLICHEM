import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRichtextPage } from './form-richtext.page';

describe('FormRichtextPage', () => {
  let component: FormRichtextPage;
  let fixture: ComponentFixture<FormRichtextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRichtextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRichtextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRichCustomPage } from './form-rich-custom.page';

describe('FormRichCustomPage', () => {
  let component: FormRichCustomPage;
  let fixture: ComponentFixture<FormRichCustomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRichCustomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRichCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCommentPage } from './form-comment.page';

describe('FormCommentPage', () => {
  let component: FormCommentPage;
  let fixture: ComponentFixture<FormCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

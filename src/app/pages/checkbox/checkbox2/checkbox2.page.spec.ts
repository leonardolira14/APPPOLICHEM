import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox2Page } from './checkbox2.page';

describe('Checkbox2Page', () => {
  let component: Checkbox2Page;
  let fixture: ComponentFixture<Checkbox2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkbox2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkbox2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

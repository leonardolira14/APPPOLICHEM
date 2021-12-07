import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardLayout3Component } from './custom-card-layout3.component';

describe('CustomCardLayout3Component', () => {
  let component: CustomCardLayout3Component;
  let fixture: ComponentFixture<CustomCardLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardLayout3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

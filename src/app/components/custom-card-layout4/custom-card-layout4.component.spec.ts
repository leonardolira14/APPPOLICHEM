import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardLayout4Component } from './custom-card-layout4.component';

describe('CustomCardLayout4Component', () => {
  let component: CustomCardLayout4Component;
  let fixture: ComponentFixture<CustomCardLayout4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardLayout4Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardLayout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

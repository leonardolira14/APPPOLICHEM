import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardLayout2Component } from './custom-card-layout2.component';

describe('CustomCardLayout2Component', () => {
  let component: CustomCardLayout2Component;
  let fixture: ComponentFixture<CustomCardLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCardLayout2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

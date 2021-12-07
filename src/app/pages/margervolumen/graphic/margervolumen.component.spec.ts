import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MargervolumenComponent } from './margervolumen.component';

describe('MargervolumenComponent', () => {
  let component: MargervolumenComponent;
  let fixture: ComponentFixture<MargervolumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MargervolumenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MargervolumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

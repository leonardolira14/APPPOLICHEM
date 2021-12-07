import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MargenComponent } from './margen.component';

describe('MargenComponent', () => {
  let component: MargenComponent;
  let fixture: ComponentFixture<MargenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MargenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MargenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

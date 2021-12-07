import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContendioComponent } from './contendio.component';

describe('ContendioComponent', () => {
  let component: ContendioComponent;
  let fixture: ComponentFixture<ContendioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContendioComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContendioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrficacirculoComponent } from './grficacirculo.component';

describe('GrficacirculoComponent', () => {
  let component: GrficacirculoComponent;
  let fixture: ComponentFixture<GrficacirculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrficacirculoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrficacirculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox1Page } from './checkbox1.page';

describe('Checkbox1Page', () => {
  let component: Checkbox1Page;
  let fixture: ComponentFixture<Checkbox1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkbox1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkbox1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

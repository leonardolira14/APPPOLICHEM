import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopPage } from './go-top.page';

describe('GoTopPage', () => {
  let component: GoTopPage;
  let fixture: ComponentFixture<GoTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

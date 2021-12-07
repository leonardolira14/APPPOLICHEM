import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPositionPage } from './go-position.page';

describe('GoPositionPage', () => {
  let component: GoPositionPage;
  let fixture: ComponentFixture<GoPositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

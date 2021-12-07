import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBottomPage } from './go-bottom.page';

describe('GoBottomPage', () => {
  let component: GoBottomPage;
  let fixture: ComponentFixture<GoBottomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoBottomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoBottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPagePage } from './sub-page.page';

describe('SubPagePage', () => {
  let component: SubPagePage;
  let fixture: ComponentFixture<SubPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Search2Page } from './search2.page';

describe('Search2Page', () => {
  let component: Search2Page;
  let fixture: ComponentFixture<Search2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Search2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Search2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

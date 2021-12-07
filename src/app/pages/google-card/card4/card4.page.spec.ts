import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card4Page } from './card4.page';

describe('Card4Page', () => {
  let component: Card4Page;
  let fixture: ComponentFixture<Card4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

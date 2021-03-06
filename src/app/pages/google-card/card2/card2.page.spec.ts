import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2Page } from './card2.page';

describe('Card2Page', () => {
  let component: Card2Page;
  let fixture: ComponentFixture<Card2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

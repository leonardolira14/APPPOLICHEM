import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3Page } from './card3.page';

describe('Card3Page', () => {
  let component: Card3Page;
  let fixture: ComponentFixture<Card3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

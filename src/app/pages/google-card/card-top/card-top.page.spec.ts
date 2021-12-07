import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopPage } from './card-top.page';

describe('CardTopPage', () => {
  let component: CardTopPage;
  let fixture: ComponentFixture<CardTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

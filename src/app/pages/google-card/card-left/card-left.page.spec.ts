import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLeftPage } from './card-left.page';

describe('CardLeftPage', () => {
  let component: CardLeftPage;
  let fixture: ComponentFixture<CardLeftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLeftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLeftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBottomPage } from './card-bottom.page';

describe('CardBottomPage', () => {
  let component: CardBottomPage;
  let fixture: ComponentFixture<CardBottomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBottomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

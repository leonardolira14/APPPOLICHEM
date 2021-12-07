import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeList2Page } from './fade-list2.page';

describe('FadeList2Page', () => {
  let component: FadeList2Page;
  let fixture: ComponentFixture<FadeList2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeList2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeList2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

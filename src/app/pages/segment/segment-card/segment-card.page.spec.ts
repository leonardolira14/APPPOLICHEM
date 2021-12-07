import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCardPage } from './segment-card.page';

describe('SegmentCardPage', () => {
  let component: SegmentCardPage;
  let fixture: ComponentFixture<SegmentCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

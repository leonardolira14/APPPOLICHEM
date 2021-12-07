import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesAnimationCoverflowPage } from './slides-animation-coverflow.page';

describe('SlidesAnimationCoverflowPage', () => {
  let component: SlidesAnimationCoverflowPage;
  let fixture: ComponentFixture<SlidesAnimationCoverflowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesAnimationCoverflowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesAnimationCoverflowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

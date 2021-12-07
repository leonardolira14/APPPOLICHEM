import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesFlipPage } from './slides-flip.page';

describe('SlidesFlipPage', () => {
  let component: SlidesFlipPage;
  let fixture: ComponentFixture<SlidesFlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesFlipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesFlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

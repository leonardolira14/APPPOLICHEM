import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeListPage } from './fade-list.page';

describe('FadeListPage', () => {
  let component: FadeListPage;
  let fixture: ComponentFixture<FadeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

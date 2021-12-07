import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipListPage } from './flip-list.page';

describe('FlipListPage', () => {
  let component: FlipListPage;
  let fixture: ComponentFixture<FlipListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewsPage } from './list-news.page';

describe('ListNewsPage', () => {
  let component: ListNewsPage;
  let fixture: ComponentFixture<ListNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

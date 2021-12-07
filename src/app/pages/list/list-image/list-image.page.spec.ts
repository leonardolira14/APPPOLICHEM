import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImagePage } from './list-image.page';

describe('ListImagePage', () => {
  let component: ListImagePage;
  let fixture: ComponentFixture<ListImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

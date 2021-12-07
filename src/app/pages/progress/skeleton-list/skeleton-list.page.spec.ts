import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonListPage } from './skeleton-list.page';

describe('SkeletonListPage', () => {
  let component: SkeletonListPage;
  let fixture: ComponentFixture<SkeletonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

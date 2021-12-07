import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogPage } from './home-blog.page';

describe('HomeBlogPage', () => {
  let component: HomeBlogPage;
  let fixture: ComponentFixture<HomeBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

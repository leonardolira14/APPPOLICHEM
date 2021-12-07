import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfolioPage } from './home-portfolio.page';

describe('HomePortfolioPage', () => {
  let component: HomePortfolioPage;
  let fixture: ComponentFixture<HomePortfolioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePortfolioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfolioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

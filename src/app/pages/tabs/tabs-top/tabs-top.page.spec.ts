import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTopPage } from './tabs-top.page';

describe('TabsTopPage', () => {
  let component: TabsTopPage;
  let fixture: ComponentFixture<TabsTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsDefaultPage } from './tabs-default.page';

describe('TabsDefaultPage', () => {
  let component: TabsDefaultPage;
  let fixture: ComponentFixture<TabsDefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDefaultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

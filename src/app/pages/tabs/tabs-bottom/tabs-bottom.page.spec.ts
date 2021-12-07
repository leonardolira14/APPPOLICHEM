import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsBottomPage } from './tabs-bottom.page';

describe('TabsBottomPage', () => {
  let component: TabsBottomPage;
  let fixture: ComponentFixture<TabsBottomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsBottomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBottomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

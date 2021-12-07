import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCustomPage } from './tabs-custom.page';

describe('TabsCustomPage', () => {
  let component: TabsCustomPage;
  let fixture: ComponentFixture<TabsCustomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCustomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

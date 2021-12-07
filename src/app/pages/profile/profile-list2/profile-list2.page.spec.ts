import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileList2Page } from './profile-list2.page';

describe('ProfileList2Page', () => {
  let component: ProfileList2Page;
  let fixture: ComponentFixture<ProfileList2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileList2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileList2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileList3Page } from './profile-list3.page';

describe('ProfileList3Page', () => {
  let component: ProfileList3Page;
  let fixture: ComponentFixture<ProfileList3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileList3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileList3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

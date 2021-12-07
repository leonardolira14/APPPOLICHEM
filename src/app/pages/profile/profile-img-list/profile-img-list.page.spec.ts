import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImgListPage } from './profile-img-list.page';

describe('ProfileImgListPage', () => {
  let component: ProfileImgListPage;
  let fixture: ComponentFixture<ProfileImgListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImgListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImgListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

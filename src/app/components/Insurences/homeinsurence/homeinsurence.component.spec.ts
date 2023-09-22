import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeinsurenceComponent } from './homeinsurence.component';

describe('HomeinsurenceComponent', () => {
  let component: HomeinsurenceComponent;
  let fixture: ComponentFixture<HomeinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

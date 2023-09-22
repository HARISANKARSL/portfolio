import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelinsurenceComponent } from './travelinsurence.component';

describe('TravelinsurenceComponent', () => {
  let component: TravelinsurenceComponent;
  let fixture: ComponentFixture<TravelinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

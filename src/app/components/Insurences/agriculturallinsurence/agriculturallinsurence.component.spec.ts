import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturallinsurenceComponent } from './agriculturallinsurence.component';

describe('AgriculturallinsurenceComponent', () => {
  let component: AgriculturallinsurenceComponent;
  let fixture: ComponentFixture<AgriculturallinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriculturallinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturallinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

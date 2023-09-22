import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorInsurenceComponent } from './motor-insurence.component';

describe('MotorInsurenceComponent', () => {
  let component: MotorInsurenceComponent;
  let fixture: ComponentFixture<MotorInsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorInsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorInsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

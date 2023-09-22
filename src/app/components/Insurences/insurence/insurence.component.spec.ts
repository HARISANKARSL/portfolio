import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurenceComponent } from './insurence.component';

describe('InsurenceComponent', () => {
  let component: InsurenceComponent;
  let fixture: ComponentFixture<InsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

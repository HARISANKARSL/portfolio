import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NriservicesComponent } from './nriservices.component';

describe('NriservicesComponent', () => {
  let component: NriservicesComponent;
  let fixture: ComponentFixture<NriservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NriservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NriservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

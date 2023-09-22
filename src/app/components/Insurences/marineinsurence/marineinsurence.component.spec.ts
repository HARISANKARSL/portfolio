import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineinsurenceComponent } from './marineinsurence.component';

describe('MarineinsurenceComponent', () => {
  let component: MarineinsurenceComponent;
  let fixture: ComponentFixture<MarineinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarineinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

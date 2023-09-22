import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialinsurenceComponent } from './comercialinsurence.component';

describe('ComercialinsurenceComponent', () => {
  let component: ComercialinsurenceComponent;
  let fixture: ComponentFixture<ComercialinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercialinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercialinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

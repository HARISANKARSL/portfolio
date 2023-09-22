import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminsurenceComponent } from './terminsurence.component';

describe('TerminsurenceComponent', () => {
  let component: TerminsurenceComponent;
  let fixture: ComponentFixture<TerminsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

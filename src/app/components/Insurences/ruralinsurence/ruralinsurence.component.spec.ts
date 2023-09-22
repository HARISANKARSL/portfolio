import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralinsurenceComponent } from './ruralinsurence.component';

describe('RuralinsurenceComponent', () => {
  let component: RuralinsurenceComponent;
  let fixture: ComponentFixture<RuralinsurenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuralinsurenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuralinsurenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

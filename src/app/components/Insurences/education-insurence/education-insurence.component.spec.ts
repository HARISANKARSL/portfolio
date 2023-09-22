import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationINSURENCEComponent } from './education-insurence.component';

describe('EducationINSURENCEComponent', () => {
  let component: EducationINSURENCEComponent;
  let fixture: ComponentFixture<EducationINSURENCEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationINSURENCEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationINSURENCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

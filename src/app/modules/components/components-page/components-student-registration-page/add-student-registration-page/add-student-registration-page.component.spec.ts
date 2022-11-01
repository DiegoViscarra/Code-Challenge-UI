import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentRegistrationPageComponent } from './add-student-registration-page.component';

describe('AddStudentRegistrationPageComponent', () => {
  let component: AddStudentRegistrationPageComponent;
  let fixture: ComponentFixture<AddStudentRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

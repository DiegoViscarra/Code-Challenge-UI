import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentRegistrationPageComponent } from './delete-student-registration-page.component';

describe('DeleteStudentRegistrationPageComponent', () => {
  let component: DeleteStudentRegistrationPageComponent;
  let fixture: ComponentFixture<DeleteStudentRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

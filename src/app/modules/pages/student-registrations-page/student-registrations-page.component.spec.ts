import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationsPageComponent } from './student-registrations-page.component';

describe('StudentRegistrationsPageComponent', () => {
  let component: StudentRegistrationsPageComponent;
  let fixture: ComponentFixture<StudentRegistrationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRegistrationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

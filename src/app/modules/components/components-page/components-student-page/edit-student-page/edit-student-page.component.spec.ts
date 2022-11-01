import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentPageComponent } from './edit-student-page.component';

describe('EditStudentPageComponent', () => {
  let component: EditStudentPageComponent;
  let fixture: ComponentFixture<EditStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

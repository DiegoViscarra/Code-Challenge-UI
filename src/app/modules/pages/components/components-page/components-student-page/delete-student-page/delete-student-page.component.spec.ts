import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentPageComponent } from './delete-student-page.component';

describe('DeleteStudentPageComponent', () => {
  let component: DeleteStudentPageComponent;
  let fixture: ComponentFixture<DeleteStudentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRegistrationPageComponent } from './class-registration-page.component';

describe('ClassRegistrationPageComponent', () => {
  let component: ClassRegistrationPageComponent;
  let fixture: ComponentFixture<ClassRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

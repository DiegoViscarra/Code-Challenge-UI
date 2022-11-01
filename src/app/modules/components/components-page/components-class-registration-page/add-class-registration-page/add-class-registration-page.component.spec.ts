import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassRegistrationPageComponent } from './add-class-registration-page.component';

describe('AddClassRegistrationPageComponent', () => {
  let component: AddClassRegistrationPageComponent;
  let fixture: ComponentFixture<AddClassRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

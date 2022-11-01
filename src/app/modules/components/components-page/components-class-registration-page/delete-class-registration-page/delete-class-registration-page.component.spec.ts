import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassRegistrationPageComponent } from './delete-class-registration-page.component';

describe('DeleteClassRegistrationPageComponent', () => {
  let component: DeleteClassRegistrationPageComponent;
  let fixture: ComponentFixture<DeleteClassRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassRegistrationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

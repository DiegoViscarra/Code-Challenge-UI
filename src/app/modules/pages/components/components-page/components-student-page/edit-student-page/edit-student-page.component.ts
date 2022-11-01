import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.css']
})
export class EditStudentPageComponent implements OnInit {

  @Input() spaceToEdit: Student;
  @Output() onEditStudent:EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  student: Student;
  newFirstName: string;
  newLastName: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isRequired();
  }

  onSubmit(){
    this.prepareData();
    if(this.isNotSameData())
    {
      if(this.form.valid)
      {
        this.onEditStudent.emit(this.student);
        this.resetFields();
      }
      else 
      {
        this.validateAllFormFields();
      }
    }
  } 

  resetFields(){
    this.form.reset();
  }

  isNotSameData(){
    if (this.student.firstName  == this.spaceToEdit.firstName
      && this.student.lastName  == this.spaceToEdit.lastName)
      return false;
    else
      return true;
  }

  isRequired(){
    this.form = this.formBuilder.group({
      inputFirstName: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(20)]],
      inputLastName: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(20)]],
    });
  }

  prepareData(){
    this.student = {
      studentId: this.spaceToEdit.studentId,
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      classes: null
    };
  }

  getFirstName(){
    if(this.newFirstName == undefined || this.newFirstName=='')
      return this.spaceToEdit.firstName;
    else
      return this.newFirstName;
  }

  getLastName(){
    if(this.newLastName == undefined || this.newLastName=='')
      return this.spaceToEdit.lastName;
    else
      return this.newLastName;
  }

  validateAllFormFields() {        
    Object.keys(this.form.controls).forEach(field => {
    const control = this.form.get(field); 
    control.markAsTouched({ onlySelf: true });  
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

}

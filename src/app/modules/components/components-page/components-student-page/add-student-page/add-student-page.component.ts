import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/services-pages/services-pages-student/student.service';

@Component({
  selector: 'app-add-student-page',
  templateUrl: './add-student-page.component.html',
  styleUrls: ['./add-student-page.component.css']
})
export class AddStudentPageComponent implements OnInit {

  @Output() onRegisterStudent:EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  student: Student;
  firstName: string;
  lastName: string;

  constructor(private studentService: StudentService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isRequired();
  }

  onSubmit(){
    this.prepareDataforPost();
    if(this.ValidateModelStudent(this.student) && this.form.valid)
    {
      this.studentService.addStudent(this.student).subscribe(student =>{
          this.resetFields();
          this.onRegisterStudent.emit(student);
      },(error: any) => {
        this.resetFields();
      });
    }
    else 
    {
      this.validateAllFormFields();
    }
  } 

  isRequired(){
    this.form = this.formBuilder.group({
      inputFirstName: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(20)]],
      inputLastName: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(20)]],
    });
  }

  prepareDataforPost(){
    this.student = {
      studentId: "123e4567-e89b-12d3-a456-426614174000",
      firstName: this.firstName,
      lastName: this.lastName,
      simpleClassesDTOs: null
    };
  }

  resetFields(){
    this.form.reset();
  }

  ValidateModelStudent(student: Student){
    if(student.firstName != null &&  student.lastName !=null)
      return true;
    else
      return false;
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

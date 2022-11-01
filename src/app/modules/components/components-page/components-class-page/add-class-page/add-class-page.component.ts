import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Class } from 'src/app/models/Class';
import { ClassService } from 'src/app/services/services-pages/services-pages-class/class.service';

@Component({
  selector: 'app-add-class-page',
  templateUrl: './add-class-page.component.html',
  styleUrls: ['./add-class-page.component.css']
})
export class AddClassPageComponent implements OnInit {

  @Output() onRegisterClass:EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  class: Class;
  title: string;
  description: string;

  constructor(private classService: ClassService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.isRequired();
  }

  onSubmit(){
    this.prepareDataforPost();
    if(this.ValidateModelClass(this.class) && this.form.valid)
    {
      this.classService.addClass(this.class).subscribe(course =>{
          this.resetFields();
          this.onRegisterClass.emit(course);
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
      inputTitle: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(30)]],
      inputDescription: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-Z-0-9ñÑáéíóúÁÉÍÓÚ".,][a-zA-Z-0-9ñÑáéíóúÁÉÍÓÚ"., ]+'),Validators.maxLength(250)]],
    });
  }

  prepareDataforPost(){
    this.class = {
      code: "123e4567-e89b-12d3-a456-426614174000",
      title: this.title,
      description: this.description,
      simpleStudentsDTOs: null
    };
  }

  resetFields(){
    this.form.reset();
  }

  ValidateModelClass(course: Class){
    if(course.title != null &&  course.description !=null)
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

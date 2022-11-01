import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Class } from 'src/app/models/Class';

@Component({
  selector: 'app-edit-class-page',
  templateUrl: './edit-class-page.component.html',
  styleUrls: ['./edit-class-page.component.css']
})
export class EditClassPageComponent implements OnInit {

  @Input() spaceToEdit: Class;
  @Output() onEditClass:EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  class: Class;
  newTitle: string;
  newDescription: string;

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
        this.onEditClass.emit(this.class);
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
    if (this.class.title  == this.spaceToEdit.title
      && this.class.description  == this.spaceToEdit.description)
      return false;
    else
      return true;
  }

  isRequired(){
    this.form = this.formBuilder.group({
      inputTitle: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ ]+'),Validators.maxLength(30)]],
      inputDescription: [null, [Validators.pattern(/^((?!\s{2,}).)*$/),Validators.pattern('^[a-zA-Z-0-9ñÑáéíóúÁÉÍÓÚ".,][a-zA-Z-0-9ñÑáéíóúÁÉÍÓÚ"., ]+'),Validators.maxLength(250)]],
    });
  }

  prepareData(){
    this.class = {
      code: this.spaceToEdit.code,
      title: this.getTitle(),
      description: this.getDescription(),
      simpleStudentsDTOs: null
    };
  }

  getTitle(){
    if(this.newTitle == undefined || this.newTitle=='')
      return this.spaceToEdit.title;
    else
      return this.newTitle;
  }

  getDescription(){
    if(this.newDescription == undefined || this.newDescription=='')
      return this.spaceToEdit.description;
    else
      return this.newDescription;
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

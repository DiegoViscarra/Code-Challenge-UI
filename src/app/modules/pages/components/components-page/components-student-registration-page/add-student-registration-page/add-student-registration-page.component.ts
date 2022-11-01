import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { RegistrationToStudent } from 'src/app/models/RegistrationToStudent';
import { Student } from 'src/app/models/Student';
import { ClassService } from 'src/app/services/services-pages/services-pages-class/class.service';
import { RegistrationService } from 'src/app/services/services-pages/services-pages-registration/registration.service';

@Component({
  selector: 'app-add-student-registration-page',
  templateUrl: './add-student-registration-page.component.html',
  styleUrls: ['./add-student-registration-page.component.css']
})
export class AddStudentRegistrationPageComponent implements OnInit {

  @Input() student: Student;
  @Output() onRegisterClasses:EventEmitter<any> = new EventEmitter();

  classesSelected: Class[]=[];
  classes: Class[]=[];
  registrationToStudent: RegistrationToStudent;

  constructor(private registrationService: RegistrationService, private classService: ClassService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(){
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
      this.sortClasses();
    });
  }

  sortClasses(){
    this.classes = this.classes.sort((class1, class2) => {
      if (class1.title > class2.title) {
        return 1;
      }  
      if (class1.title < class2.title) {
        return -1;
      }
      return 0;
    });
  }

  onSubmit(){
    this.prepareDataforPost();
    this.registrationService.addRegistrationToStudent(this.registrationToStudent).subscribe(registrationToStudent =>{
      this.onRegisterClasses.emit(registrationToStudent);
    });
  } 

  prepareDataforPost(){
    this.registrationToStudent = {
      SimpleStudentDTO: this.student,
      SimpleClassesDTOs: this.classesSelected
    };
  }

}

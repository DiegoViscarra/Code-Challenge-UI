import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { RegistrationToClass } from 'src/app/models/RegistrationToClass';
import { Student } from 'src/app/models/Student';
import { RegistrationService } from 'src/app/services/services-pages/services-pages-registration/registration.service';
import { StudentService } from 'src/app/services/services-pages/services-pages-student/student.service';

@Component({
  selector: 'app-add-class-registration-page',
  templateUrl: './add-class-registration-page.component.html',
  styleUrls: ['./add-class-registration-page.component.css']
})
export class AddClassRegistrationPageComponent implements OnInit {

  @Input() class: Class;
  @Output() onRegisterStudents:EventEmitter<any> = new EventEmitter();

  studentsSelected: Student[]=[];
  students: Student[]=[];
  registrationToClass: RegistrationToClass;

  constructor(private registrationService: RegistrationService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.sortStudents();
    });
  }

  sortStudents(){
    this.students = this.students.sort((student1, student2) => {
      if (student1.firstName > student2.firstName) {
        return 1;
      }  
      if (student1.firstName < student2.firstName) {
        return -1;
      }
      return 0;
    });
  }

  onSubmit(){
    this.prepareDataforPost();
    this.registrationService.addRegistrationToClass(this.registrationToClass).subscribe(registrationToClass =>{
      this.onRegisterStudents.emit(registrationToClass);
    });
  } 

  prepareDataforPost(){
    this.registrationToClass = {
      SimpleStudentsDTOs: this.studentsSelected,
      SimpleClassDTO: this.class
    };
  }

}

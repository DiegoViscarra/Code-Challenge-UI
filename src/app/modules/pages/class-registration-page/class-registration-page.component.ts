import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { Student } from 'src/app/models/Student';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/services-pages/services-pages-class/class.service';
import { RegistrationService } from 'src/app/services/services-pages/services-pages-registration/registration.service';
import { RegistrationToClass } from 'src/app/models/RegistrationToClass';

@Component({
  selector: 'app-class-registration-page',
  templateUrl: './class-registration-page.component.html',
  styleUrls: ['./class-registration-page.component.css']
})
export class ClassRegistrationPageComponent implements OnInit {
  students: Student[]=[];
  class: Class;
  toDeleteStudent: Student;
  constructor(private classService: ClassService, private _location: Location, private router: Router,
    private registrationService: RegistrationService) { 
    this.class = this.router.getCurrentNavigation().extras.state.class;
  }
  searchName: string="";
  itemsPerPage = 10;
  totalRecords: string
  page: number = 1

  ngOnInit(): void {
    this.getClassStudents();
  }

  getClassStudents(){
    this.classService.getClassWithStudents(this.class.code).subscribe(course => {
      this.students = course.simpleStudentsDTOs;
      this.sortStudents();
    });
  }

  onRegisterStudents(registrationToClass: RegistrationToClass){
    this.getClassStudents();
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

  onDelete(student: Student){
    this.toDeleteStudent = student;
  }

  onDeleteRegistration(bool: boolean){
    if(bool){ 
      this.registrationService.deleteRegistration(this.class.code, this.toDeleteStudent.studentId).subscribe(resp =>{
        this.getClassStudents();
      });
    }
  }

  backClicked() {
    this._location.back();
  }

}

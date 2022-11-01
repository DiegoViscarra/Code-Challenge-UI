import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/services-pages/services-pages-student/student.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Class } from 'src/app/models/Class';

@Component({
  selector: 'app-student-registrations-page',
  templateUrl: './student-registrations-page.component.html',
  styleUrls: ['./student-registrations-page.component.css']
})
export class StudentRegistrationsPageComponent implements OnInit {
  classes: Class[]=[];
  student: Student;
  constructor(private studentService: StudentService, private _location: Location, private router: Router) { 
    this.student = this.router.getCurrentNavigation().extras.state.student;
  }
  searchName: string="";
  itemsPerPage = 10;
  totalRecords: string
  page: number = 1

  ngOnInit(): void {
    this.getStudentClasses();
  }

  getStudentClasses(){
    this.studentService.getStudentWithClasses(this.student.studentId).subscribe(student => {
      this.classes = student.simpleClassesDTOs;
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

  backClicked() {
    this._location.back();
  }

}

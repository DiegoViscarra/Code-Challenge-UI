import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/services-pages/services-pages-student/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  students: Student[]=[];
  searchName: string="";
  toEditStudent: Student;
  toDeleteStudent: Student;

  constructor(private studentService: StudentService, private _location: Location) { }
  itemsPerPage = 10;
  totalRecords: string
  page: number = 1

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(students => {
      this.students = students;
      this.sortStudents();
    });
  }

  onRegisterStudent(student: Student){
    this.students.push(student);
    this.sortStudents();
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

  onEdit(student: Student){
    this.toEditStudent = student;
  }

  onEditStudent(student: Student){
    this.studentService.editStudent(student.studentId, student).subscribe(student => {
      this.students[this.students.findIndex(s => s.studentId == student.studentId)] = student
    });
  }
  
  onDelete(student: Student){
    this.toDeleteStudent = student;
  }

  onDeleteStudent(bool: boolean){
    if(bool){ 
      this.studentService.deleteStudent(this.toDeleteStudent.studentId).subscribe(resp =>{
        this.getStudents();
      });
    }
  }

  backClicked() {
    this._location.back();
  }

}

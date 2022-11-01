import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentUrl: string = 'http://localhost:64544/api/student'
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }

  deleteStudent(studentId: string): Observable<Student>{
    return this.http.delete<Student>(`${this.studentUrl}/${studentId}`);
  }
}

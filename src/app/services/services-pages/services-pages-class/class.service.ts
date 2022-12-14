import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from 'src/app/models/Class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classUrl: string = 'http://localhost:64544/api/class'
  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]>{
    return this.http.get<Class[]>(`${this.classUrl}`);
  }

  getClassWithStudents(code: string): Observable<Class>{
    return this.http.get<Class>(`${this.classUrl}/${code}/students`);
  }

  addClass(course: Class): Observable<Class>{
    return this.http.post<Class>(`${this.classUrl}`, course);
  }

  editClass(code: string, course: Class): Observable<Class>{
    return this.http.put<Class>(`${this.classUrl}/${code}`, course);
  }

  deleteClass(code: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.classUrl}/${code}`);
  }
}

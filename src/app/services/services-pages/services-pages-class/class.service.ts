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
}

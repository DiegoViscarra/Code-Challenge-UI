import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationToStudent } from 'src/app/models/RegistrationToStudent';
import { RegistrationToClass } from 'src/app/models/RegistrationToClass';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  registrationUrl: string = 'http://localhost:64544/api/registration'
  constructor(private http: HttpClient) { }

  addRegistrationToClass(registrationToClass: RegistrationToClass): Observable<RegistrationToClass>{
    return this.http.post<RegistrationToClass>(`${this.registrationUrl}/students`, registrationToClass);
  }

  addRegistrationToStudent(registrationToStudent: RegistrationToStudent): Observable<RegistrationToStudent>{
    return this.http.post<RegistrationToStudent>(`${this.registrationUrl}/classes`, registrationToStudent);
  }

  deleteRegistration(code: string, studentId: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.registrationUrl}/${code}/class/${studentId}/student`);
  }
}

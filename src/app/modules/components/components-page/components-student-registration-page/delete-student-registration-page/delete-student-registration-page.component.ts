import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-student-registration-page',
  templateUrl: './delete-student-registration-page.component.html',
  styleUrls: ['./delete-student-registration-page.component.css']
})
export class DeleteStudentRegistrationPageComponent implements OnInit {

  @Output() onDeleteRegistration:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeleteRegistration.emit(true);
  }

}

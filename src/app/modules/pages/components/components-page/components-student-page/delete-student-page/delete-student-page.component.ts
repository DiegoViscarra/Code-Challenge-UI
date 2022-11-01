import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-student-page',
  templateUrl: './delete-student-page.component.html',
  styleUrls: ['./delete-student-page.component.css']
})
export class DeleteStudentPageComponent implements OnInit {

  @Output() onDeleteStudent:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeleteStudent.emit(true);
  }

}

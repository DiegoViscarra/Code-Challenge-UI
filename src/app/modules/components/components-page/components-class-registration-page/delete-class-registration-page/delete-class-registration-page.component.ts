import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-class-registration-page',
  templateUrl: './delete-class-registration-page.component.html',
  styleUrls: ['./delete-class-registration-page.component.css']
})
export class DeleteClassRegistrationPageComponent implements OnInit {

  @Output() onDeleteRegistration:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeleteRegistration.emit(true);
  }

}

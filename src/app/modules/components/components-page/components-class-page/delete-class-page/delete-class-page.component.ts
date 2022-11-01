import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-class-page',
  templateUrl: './delete-class-page.component.html',
  styleUrls: ['./delete-class-page.component.css']
})
export class DeleteClassPageComponent implements OnInit {

  @Output() onDeleteClass:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.onDeleteClass.emit(true);
  }

}

import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/models/Class';
import { ClassService } from 'src/app/services/services-pages/services-pages-class/class.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {
  classes: Class[]=[];
  toDeleteClass: Class;

  constructor(private classService: ClassService, private _location: Location) { }
  searchName: string="";
  itemsPerPage = 10;
  totalRecords: string
  page: number = 1

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(){
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
      this.sortClasses();
    });
  }

  onRegisterClass(course: Class){
    this.classes.push(course);
    this.sortClasses();
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

  onDelete(course: Class){
    this.toDeleteClass = course;
  }

  onDeleteClass(bool: boolean){
    if(bool){ 
      this.classService.deleteClass(this.toDeleteClass.code).subscribe(resp =>{
        this.getClasses();
      });
    }
  }

  backClicked() {
    this._location.back();
  }

}
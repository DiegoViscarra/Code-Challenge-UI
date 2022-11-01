import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Pipe({
  name: 'filterStudent'
})
export class FilterStudentPipe implements PipeTransform {

  transform(value: Student[], search: string): any {
    if(search === ""){
      return value;
    }
    const searchResultList: any[]=[];
    for (let i = 0; i < value.length; i++) {
      let firstName: string=value[i].firstName
      let lastName: string=value[i].lastName

      firstName = firstName.toLowerCase().replace(/\s/g, ""); 
      lastName = lastName.toLowerCase().replace(/\s/g, "");
      search = search.toLowerCase().replace(/\s/g, "");
  
      if(firstName.includes(search) || lastName.includes(search))
      {
        searchResultList.push(value[i])
      }
    }
    return searchResultList;
  }

}

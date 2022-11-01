import { Pipe, PipeTransform } from '@angular/core';
import { Class } from 'src/app/models/Class';

@Pipe({
  name: 'filterClass'
})
export class FilterClassPipe implements PipeTransform {

  transform(value: Class[], search: string): any {
    if(search === ""){
      return value;
    }
    const searchResultList: any[]=[];
    for (let i = 0; i < value.length; i++) {
      let title: string=value[i].title
      let description: string=value[i].description

      title = title.toLowerCase().replace(/\s/g, ""); 
      description = description.toLowerCase().replace(/\s/g, "");
      search = search.toLowerCase().replace(/\s/g, "");
  
      if(title.includes(search) || description.includes(search))
      {
        searchResultList.push(value[i])
      }
    }
    return searchResultList;
  }

}

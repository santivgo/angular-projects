import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], value: string, filterBy: string): any[] {

    if(list.length !== 0 && value && filterBy){
      return list.filter((item)=> item[filterBy].toLowerCase().includes(value.toLowerCase()) )
    }
    

    return list


  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, size: number): string {
    const HAS_VALUE = value
    const VALUE_EQUAL_SIZE = value.length <= size
    if(!HAS_VALUE){
      return ''
    }else if(VALUE_EQUAL_SIZE){
      return value
    }
    return `${value.slice(0,size)}...`
  }

}

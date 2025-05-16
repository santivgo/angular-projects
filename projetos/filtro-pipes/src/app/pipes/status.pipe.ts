import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../interfaces/user.interface';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    return  value === STATUS.ACTIVE ? "ACTIVE"  : "INACTIVE"
  }
        
}

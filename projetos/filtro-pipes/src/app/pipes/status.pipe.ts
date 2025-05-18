import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../interfaces/user.interface';
import { dictionary } from '../types/dictionary.type';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

<<<<<<< HEAD
  transform(status: STATUS): string {
    const statusList: dictionary = {1: "Ativo", 2: "Inativo"}
    return statusList[status];
  }

=======
  transform(value: number): string {
    return  value === STATUS.ACTIVE ? "ACTIVE"  : "INACTIVE"
  }
        
>>>>>>> 69e163f7bf1fff88e9f33d799ad53227a5b737bc
}

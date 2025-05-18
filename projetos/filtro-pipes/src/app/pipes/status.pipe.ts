import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../interfaces/user.interface';
import { dictionary } from '../types/dictionary.type';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: STATUS): string {
    const statusList: dictionary = {1: "Ativo", 2: "Inativo"}
    return statusList[status];
  }

}

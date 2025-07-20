import { Pipe, PipeTransform } from '@angular/core';
import { userStatusEnum } from '../enums/userStatusEnum';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): string {
    const userStatusDescription: {[key: number]: string } = {
      [userStatusEnum.ATIVO]: "Ativo",
      [userStatusEnum.INATIVO]: "Inativo",
    }

    return userStatusDescription[value] ?  userStatusDescription[value] : "Desconhecido"

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;
    if (INVALID_STATUS) {
      return 'Status Indisponível'
    }
    return status ? 'Ativo' : 'Inativo'
  }

}




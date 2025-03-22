import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vazio',
  standalone: false
})
export class VazioPipe implements PipeTransform {

  transform(valor: any): string | any {
    const IS_EMPTY = valor === null || valor === undefined || valor === '';

    if (IS_EMPTY) {
      return '-'
    }
    return valor;

  }

}

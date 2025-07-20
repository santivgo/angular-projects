import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
  standalone: false
})
export class TelefonePipe implements PipeTransform {

  transform(phone: string): string {
    const VALID_PHONE = phone || phone.length === 11 || phone.length === 10;
    if (VALID_PHONE) {
      const CELLPHONE = phone.length === 11;
      if (CELLPHONE) {
        console.log(phone)
        return `(${phone.substring(0, 2)}) ${phone.substring(2, 3)} ${phone.substring(3, 7)}-${phone.substring(7, 11)}`;
      }
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6, 10)}`;

    }

    return 'Telefone indisponível ou inválido'


  }
}
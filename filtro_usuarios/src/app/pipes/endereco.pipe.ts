import { Pipe, PipeTransform } from '@angular/core';
import { IEndereco } from '../interfaces/user/endereco';

@Pipe({
  name: 'endereco',
  standalone: false
})
export class EnderecoPipe implements PipeTransform {

  transform(endereco: IEndereco): string {
    const VALID_ADDRESS = endereco && endereco.rua && endereco.numero && endereco.cidade && endereco.estado;
    if (VALID_ADDRESS) {
      return `${endereco.rua}, ${endereco.numero}, ${endereco.cidade} - ${endereco.estado}`
    }
    return 'Endereço indisponível ou inválido'
  }

}

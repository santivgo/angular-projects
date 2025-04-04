import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employed'
})
export class EmployedPipe implements PipeTransform {

  transform(ocupation: string): string {
    return ocupation === '-' ? 'unemployed' : ocupation;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    const VALID_NAME = name !== "";

    if (!VALID_NAME) {
      return gender === "Female" ? 'Jane Doe' : 'John Doe'
    }
    return name

  }

}

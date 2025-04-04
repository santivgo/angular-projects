import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Pipe({
  name: 'validhero'
})
export class ValidheroPipe implements PipeTransform {

  transform(hero: IHero): boolean {
    return hero.name && hero.name.length > 0 ? true : false
  }

}

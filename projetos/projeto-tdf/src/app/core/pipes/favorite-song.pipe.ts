import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteSong'
})
export class FavoriteSongPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Sim' : 'Não'
  }

}

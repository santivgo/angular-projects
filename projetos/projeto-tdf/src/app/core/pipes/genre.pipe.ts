import { Pipe, PipeTransform } from '@angular/core';
import { GenresService } from '../services/genres.service';
import { IGenre } from '../interfaces/genre.interface';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  constructor(private readonly _genreService: GenresService){}
 
   transform(genreId: number): string {

    return this._genreService.getGenreDescription(genreId)
    
   }
}

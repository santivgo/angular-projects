import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/user-response.interface';
import { Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { EstadosEnum } from '../enums/states.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient){}

  private readonly usuariosTeste: IUser[] = [
        {
          name: 'Usuário 1',
          username: 'usuario1',
          email: 'usuario1@example.com',
          password: 'senha1',
          birthDate: '01/12/1990',
          state: 13,
          musics: [
            { title: 'Música 1', band: 'Banda A', genre: 8, isFavorite: false },
            { title: 'Música 2', band: 'Banda B', genre: 11, isFavorite: false },
            { title: 'Música 3', band: 'Banda C', genre: 9, isFavorite: true },
          ],
        },
        {
          name: 'Usuário 2',
          username: 'usuario2',
          email: 'usuario2@example.com',
          password: 'senha2@44',
          birthDate: '02/02/1995',
          state: 50,
          musics: [
            { title: 'Música 4', band: 'Banda X', genre: 1, isFavorite: false },
            { title: 'Música 5', band: 'Banda Y', genre: 7, isFavorite: true },
            { title: 'Música 6', band: 'Banda Z', genre: 12, isFavorite: false },
          ],
        },
        {
          name: 'Usuário 3',
          username: 'usuario3',
          email: 'usuario3@example.com',
          password: 'senha3@123@122',
          birthDate: '03/03/2000',
          state: 42,
          musics: [
            { title: 'Easy', band: 'Commodores', genre: 2, isFavorite: true },
            { title: 'True', band: 'Spandau Ballet', genre: 2, isFavorite: false },
            { title: "If You Don't Know Me by Now", band: 'Simply Red', genre: 2, isFavorite: false },
          ],
        },
]

  getUsersList(): Observable<IUser[]>{

    return new Observable((observer)=> {
      setTimeout(()=> {
        observer.next(this.usuariosTeste);
        observer.complete()
      }, 3000)
    })
    // return of(this.usuariosTeste) // simula um observable mas é síncrono, então o ideal pra simular na vida real seria um assíncrono
  }
  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private readonly _http: HttpClient  ){}

  getUserById(id: number): Observable<IUser>{
    return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}

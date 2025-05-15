import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _httpClient: HttpClient ) {}

  getAllUsers(): Observable<IUser[]>{
    return this._httpClient.get<IUser[]>("http://localhost:3000/users")
  }
}

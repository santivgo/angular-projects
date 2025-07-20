import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class UsersService {

  constructor(private http: HttpClient) { }

  retrieveAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserResponse } from '../interfaces/user-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient){}
  url = "https://jsonplaceholder.typicode.com/users"

  getUsersList(): Observable<IUserResponse[]>{
    return this.http.get<IUserResponse[]>(this.url)
  }
  
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserResponse } from "../interfaces/user-response.interface";

@Injectable({providedIn: 'root'})
export class UsersPlaceholderService {
    constructor (private readonly http: HttpClient){}

      url = "https://jsonplaceholder.typicode.com/users"
    
      getUsersList(): Observable<IUserResponse[]>{
        return this.http.get<IUserResponse[]>(this.url)
      }
}
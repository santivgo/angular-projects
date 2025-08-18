import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService implements AsyncValidator {

  constructor(private readonly _usersService: UsersService) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log('aqui')
    if (!control.value) return of(null)
    return this._usersService.getAllUsers().pipe(map((userList)=> {
      return userList.some((user)=> user.name === control.value) ? {'existingName': true} : null
    }))
  }

}

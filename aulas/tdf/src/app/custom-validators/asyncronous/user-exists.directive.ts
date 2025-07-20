import { Directive, forwardRef } from '@angular/core';
import { UsersService } from './users.service';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { IUser } from './user.interface';

@Directive({
  selector: '[appUserExists]',
  providers: [{provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => UserExistsDirective), 
  multi:true
  }]

})
export class UserExistsDirective implements AsyncValidator{

  constructor(private readonly _userService: UsersService){}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._userService.retrieveAllUsers().pipe(map((userList: IUser[])=> {
      return userList.some((user)=> control.value.name != '' && user.name.includes(control.value.name)) ?  null : {noIncludes: true}

    }))
  }

}



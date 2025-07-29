import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { UsersPlaceholderService } from '../services/usersPlaceholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(()=> CredentialsValidatorDirective),
    multi: true
  }]
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') tipoCampo: string = '';

  constructor(private readonly _up: UsersPlaceholderService){}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    if (this.tipoCampo === 'email'){
      return this._up.getUsersList().pipe(map(userList => {
        return userList.some((user)=> user.email.toLocaleLowerCase().includes(control.value.toLocaleLowerCase())) ? {'includes-email': true} : null
      }))
    }else if(this.tipoCampo === 'username'){
      return this._up.getUsersList().pipe(map(userList => {
        return userList.some((user)=> user.username.toLocaleLowerCase().includes(control.value.toLocaleLowerCase())) ? {'includes-username': true} : null
      }))
    }

    return of(null)
  }


}

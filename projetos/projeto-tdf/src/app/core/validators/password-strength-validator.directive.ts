import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { getPasswordStrength } from '../utils/get-password-strength';
import zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [{provide: NG_VALIDATORS, multi: true, useExisting: PasswordStrengthValidatorDirective}]
})
export class PasswordStrengthValidatorDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;

    const result: zxcvbn.ZXCVBNResult = getPasswordStrength(control.value)
    const WEAK_OR_MEDIUM_PASSWORD: boolean = result.score < 4;
    return WEAK_OR_MEDIUM_PASSWORD ? {'weak-password': true} : null
  }
  

}

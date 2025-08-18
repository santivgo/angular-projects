import { Component } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

function valueFormat(value: string) {
  return value.toLocaleLowerCase().trim()
}
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const pass: FormControl = control.get('password') as FormControl
  const re: FormControl = control.get('passwordConfirmation') as FormControl
  if (pass && re) {
    const EQUAL_PASSWORDS = valueFormat(pass.value) === valueFormat(re.value)
    return EQUAL_PASSWORDS ? null : { 'non-equal-password': 'the password need to be equal' }

  }

  return null
}
@Component({
  selector: 'app-cross-validator',
  standalone: false,
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.sass'
})
export class CrossValidatorComponent {
  passForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    passwordConfirmation: new FormControl(''),
  }, [passwordValidator])

}

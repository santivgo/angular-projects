import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appInvalidQuantity]',
  providers: [{provide: NG_VALIDATORS, useExisting: InvalidQuantityDirective, multi: true}]
})
export class InvalidQuantityDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {


    const tecInvalid = (control.value['dpto'] === 'it' && +control.value['qtd_dpto'] > 10)
    const rhInvalid =  (control.value['dpto'] === 'rh' && +control.value['qtd_dpto'] > 20)



    if (tecInvalid){
      return {'invalidIT': true}
    }
    if (rhInvalid){
      return {'invalidRH': true}
    }
    return null
  }


}

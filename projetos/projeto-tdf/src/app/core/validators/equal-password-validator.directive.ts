import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from "@angular/forms";

@Directive({
    selector: '[appEqualPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        multi:true,
        useExisting: EqualPasswordValidator
    } ]
})

export class EqualPasswordValidator implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const repassControl = control.get('repass')
        if (control.value && control.value.repass){
            const EQUAL_PASSWORD = control.value.password === control.value.repass
            if (!EQUAL_PASSWORD){
                repassControl?.setErrors({'no-equal-password': true})
            }

        }
        return null;
    }



}
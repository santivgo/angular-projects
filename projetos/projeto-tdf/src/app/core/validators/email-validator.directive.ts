import { Directive, SimpleChanges } from "@angular/core";
import { AbstractControl, EmailValidator, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[appInvalidEmailValidator]',
    providers: [
        {provide: NG_VALIDATORS,
        useExisting: InvalidEmailDirective,
        multi: true
        }
    ]
})

export class InvalidEmailDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        const regexp: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!regexp.test(control.value)){
            return {'invalid-email': true}
        }
        return null
    }




}
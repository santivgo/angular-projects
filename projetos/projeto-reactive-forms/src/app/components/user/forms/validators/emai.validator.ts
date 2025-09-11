export function invalidTextValidator(text: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isTextInvalid: boolean = control.value.includes(text);
        return isTextInvalid ? { 'invalid-text': 'Possui texto inválido' } : null

    }
}
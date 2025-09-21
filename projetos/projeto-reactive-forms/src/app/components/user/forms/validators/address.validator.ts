import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from "@angular/forms";


const hasText = (control: AbstractControl | null): boolean => {
  return !!control && control.value && control.value.toString().trim().length > 0;

}


export const ValidateAddress: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const groupControl = group as FormGroup

  const controlsToCheck: string[] = Object.keys(groupControl.controls).filter((value) => value != 'type' && value != 'typeDescription' && value != 'complement')

  const hasAnyText: boolean = controlsToCheck.some((value) => hasText(groupControl.get(value)))

  for (const controlName of controlsToCheck) {
    const control: AbstractControl | null = groupControl.get(controlName)
    if (hasAnyText) {

      if (!control?.value) {
        control?.setErrors({ requiredAddressControl: true })
        control?.markAsTouched(); // <- Adicione isso

      } else {
        control?.setErrors(null)
      }
    } else {
      control?.setErrors(null)
    }

  }




  return null;
}
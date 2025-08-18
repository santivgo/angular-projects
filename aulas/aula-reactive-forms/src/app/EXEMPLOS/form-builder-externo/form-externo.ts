import { FormControl, FormGroup, Validators } from "@angular/forms"

export class FormExterno {
    meuForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        endereco: new FormGroup({
            rua: new FormControl('', [Validators.required]),
            numero: new FormControl('', [Validators.required])

        })

    })

    get nome(): FormControl {
        return this.meuForm.get('name') as FormControl
    }

}
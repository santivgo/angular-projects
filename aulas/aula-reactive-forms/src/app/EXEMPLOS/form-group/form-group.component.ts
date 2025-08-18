import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: false,
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.sass'
})
export class FormGroupComponent {
  meuForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    endereco: new FormGroup({
      rua: new FormControl('', [Validators.required]),
      numero: new FormControl('', [Validators.required])

    })

    })

  get nome(): FormControl{
    return this.meuForm.get('name') as FormControl
  }

  onConsultarClick(){
    console.log(this.meuForm)
  }
}

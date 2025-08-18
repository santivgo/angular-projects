import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mark-as-touched',
  standalone: false,
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.sass'
})
export class MarkAsTouchedComponent {
  pessoaForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),

  })

  get email(): FormControl {
    return this.pessoaForm.get('email') as FormControl
  }

  get nome(): FormControl {
    return this.pessoaForm.get('nome') as FormControl
  }


  send() {
    if (this.pessoaForm.invalid) this.pessoaForm.markAllAsTouched()

  }
}

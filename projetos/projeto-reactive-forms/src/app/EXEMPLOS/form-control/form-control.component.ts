import { Component, inject } from '@angular/core';
import { FormControl, FormControlDirective, Validators } from '@angular/forms';
import { UserValidatorService } from '../services/user-validator.service';

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.sass'
})
export class FormControlComponent {

  userValidator = inject(UserValidatorService);

  nome: FormControl = new FormControl('', {
    asyncValidators: [this.userValidator.validate.bind(this.userValidator)],
  })
  alterarValor(): void {
    this.nome.patchValue('teste')
  }
  intercept(arg0: Event): void {
    console.log(arg0);
  }

  habilitar(): void {
    this.nome.disable()
  }
  desabilitar(): void {
    this.nome.enable()
  }

}

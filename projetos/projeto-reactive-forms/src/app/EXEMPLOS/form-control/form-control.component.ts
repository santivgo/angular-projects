import { Component } from '@angular/core';
import { FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: false,
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.sass'
})
export class FormControlComponent {


  nome: FormControl = new FormControl()
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

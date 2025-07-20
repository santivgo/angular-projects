import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { CadastroService } from './cadastro.service';


@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule, Comp1Component, Comp2Component],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass',
})
export class CadastroComponent {
  cadastraForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(16)]),
    data: new FormControl(''),
  });


  constructor(private cliente: HttpClient, private readonly _cadastro: CadastroService) {}

}

import { HttpClient } from '@angular/common/http';
import { Component, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.sass'
})
export class CadastroComponent{
  cadastraForm = new FormGroup({
    name: new FormControl('', Validators.minLength(9)),
    date: new FormControl(''),

  })

  personagem_nome: String = "";
  constructor(private cliente: HttpClient){
  }

  getChanges(){
    console.log(this.cadastraForm.controls.name.value)
    console.log(this.cadastraForm.controls.date.value)
    this.cliente.get<{name: string}>(`https://swapi.dev/api/people/${this.cadastraForm.controls.name.value}/`).subscribe((resp)=> this.personagem_nome = resp.name)
    console.log(this.personagem_nome)
  }

}

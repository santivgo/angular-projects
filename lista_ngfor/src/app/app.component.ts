import { Component } from '@angular/core';

interface IPessoa {
  nome: string,
  idade: number  

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent {

  personSelectedIndex: number | undefined;

  listaPessoas: Array<IPessoa> = [
    {nome: 'Santiago', idade: 15}, 
    {nome: 'Felipe', idade: 20},
    {nome:'Gustavo', idade :14},
    {nome: 'José', idade: 16}
    ]

    selectPerson(id: number):void {
      this.personSelectedIndex = id;
    }
    
  }

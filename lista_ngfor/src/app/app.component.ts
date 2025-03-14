import { Component } from '@angular/core';

interface IPessoa {
  name: string,
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
    {name: 'Santiago', idade: 15}, 
    {name: 'Felipe', idade: 20},
    {name:'Gustavo', idade :14},
    {name: 'José', idade: 16}
    ]

    selectPerson(id: number):void {
      this.personSelectedIndex = id;
    }
    
  }

import { Component, Input } from '@angular/core';


interface IPessoa {
  nome: string,
  idade: number  
}

interface IParameters{
  isOdd: boolean,
  isHighlighted: boolean,
  isFirst: boolean,
  isLast: boolean
}

@Component({
  selector: 'app-item-lista',
  standalone: false,
  templateUrl: './item-lista.component.html',
  styleUrl: './item-lista.component.scss'
})


export class ItemListaComponent {
  
    @Input({required: true})
    name: String | undefined;
    @Input({required: true})
    idade: number | undefined;

    @Input({required: true})
    parameters: IParameters | undefined;
}

import { Component, Input, Output, EventEmitter} from '@angular/core';

interface ICard{
  color: 'purple' | 'white';
  plan: string;
  price: number;
  buttonColor?: 'purple' | 'white'
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})


export class CardComponent {
  @Input({required: true, alias:'card'})
  card: ICard = {
    color: 'purple',
    plan: "",
    price:  NaN,
  }

  @Output()
  emitter = new EventEmitter<void>()

  get buttonColor(): 'purple' | 'white' {
      return this.card.color === 'purple' ? 'purple' : 'white'
  }

  ButtonClicked(){
    console.log("Botão Clicado!")
  }
}

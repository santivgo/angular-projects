import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.sass'
})
export class BotaoComponent {
  @Input({'required': true})
  nome: string = ""
}

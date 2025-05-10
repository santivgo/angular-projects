import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoComponent } from './components/botao/botao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'teste';
  nomeBotao: string = "Oii"
}

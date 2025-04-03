import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'cadastro';
}

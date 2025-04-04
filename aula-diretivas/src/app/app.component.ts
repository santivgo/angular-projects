import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'aula-diretivas';
  textColor = "green"
  bgColor = "orange"
}

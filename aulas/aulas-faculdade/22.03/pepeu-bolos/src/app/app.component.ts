import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComponent } from "./components/text/text.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'pepeu-bolos';
}

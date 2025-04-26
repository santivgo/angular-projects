import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './outlet/ex4.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'aula-ngtemplate';
  condition: boolean = true
}

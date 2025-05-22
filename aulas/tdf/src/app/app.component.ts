import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'tdf';
  luck: string = "Olá"

  @ViewChild('meuFormControl') formControl!: NgModel;
}

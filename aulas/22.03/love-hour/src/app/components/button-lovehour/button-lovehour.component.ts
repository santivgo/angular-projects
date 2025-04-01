import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-lovehour',
  standalone: false,
  templateUrl: './button-lovehour.component.html',
  styleUrl: './button-lovehour.component.sass'
})
export class ButtonLovehourComponent {
  @Output()
  clicado = new EventEmitter<boolean>();

  botaoClicado(): void {
    this.clicado.emit(true);
  }
}

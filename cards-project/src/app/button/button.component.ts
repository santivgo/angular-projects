import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true, alias: 'title'})
  buttonTitle: string = "";
  @Input({required: true, alias: 'style'})
  buttonStyle: 'white' | 'orange' = "white";

  @Output('clicked') buttonEmitter = new EventEmitter<void>();
  @Input({alias: 'disabled'})
  isDisabled: boolean = false;

  onButtonClicked(){
    this.buttonEmitter.emit();
  }

}

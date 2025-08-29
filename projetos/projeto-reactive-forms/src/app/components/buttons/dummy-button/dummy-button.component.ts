import { Component, Input } from '@angular/core';
import { ButtonColorMap } from '../../../utils/button-color.map';

@Component({
  selector: 'app-dummy-button',
  standalone: false,
  templateUrl: './dummy-button.component.html',
  styleUrl: './dummy-button.component.sass'
})
export class DummyButtonComponent {

  @Input() icon: string = '';
  @Input({ required: true }) textButton: string = '';
  @Input({ required: true }) colorButton: string = ''
  addColors(): string[] {
    return ButtonColorMap[this.colorButton];
  }



}

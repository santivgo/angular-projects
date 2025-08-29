import { Component, Input } from '@angular/core';

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

}

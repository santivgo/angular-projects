import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: false,
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.sass'
})
export class FormItemComponent {
  @Input({ 'required': true }) form!: FormGroup
  @Input({ 'required': true }) itemName: string = ''
  @Input({ 'required': true }) name: string = ''
  @Input({}) type: string = 'text'
}

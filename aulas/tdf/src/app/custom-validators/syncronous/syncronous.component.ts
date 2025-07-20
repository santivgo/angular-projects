import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvalidTextValidatorDirective } from '../directives/invalid-text-validator.directive';
import { InvalidQuantityDirective } from '../directives/invalid-quantity.directive';

@Component({
  selector: 'app-syncronous',
  imports: [FormsModule, CommonModule, InvalidQuantityDirective],
  templateUrl: './syncronous.component.html',
  styleUrl: './syncronous.component.sass',
  standalone: true
})
export class SyncronousComponent {
  minhaVar: string = 'Felipe'
}

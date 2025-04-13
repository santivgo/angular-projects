import { Component } from '@angular/core';
import { Icon } from '../../interfaces/IHeader.interface';

@Component({
  selector: 'app-debit-card',
  standalone: false,
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.sass'
})
export class DebitCardComponent {
  icon = Icon.debit_card
}

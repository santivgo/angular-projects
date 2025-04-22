import { Component } from '@angular/core';
import { Icon } from '../../interfaces/IHeader.interface';

@Component({
  selector: 'app-credit-card',
  standalone: false,
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.sass'
})
export class CreditCardComponent {
  icon = Icon.credit_card

}

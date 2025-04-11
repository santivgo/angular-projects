import { Component } from '@angular/core';
import { Icon } from '../../interfaces/IHeader.interface';
@Component({
  selector: 'app-balance-card',
  standalone: false,
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.sass'
})
export class BalanceCardComponent {
  icon = Icon.hand
}

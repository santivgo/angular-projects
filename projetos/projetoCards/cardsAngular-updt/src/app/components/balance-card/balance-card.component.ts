import { Component } from '@angular/core';
import { Icon } from '../../interfaces/IHeader.interface';
import { IItem } from '../../interfaces/IItem.interface';
@Component({
  selector: 'app-balance-card',
  standalone: false,
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.sass'
})
export class BalanceCardComponent {
  icon = Icon.hand

  cardList: IItem[] = [{ text1: 'Conta Corrente', text2: 'R$ 200,00' }, { text1: 'Conta Corrente Saldo Vinculados', text2: 'R$ 200,00' }, { text1: 'Conta Poupança Saldo Vinculados', text2: 'R$ 400,00' }, { text1: 'Conta Poupança Saldo Vinculados', text2: 'R$ 400,00' },
  { text1: 'Investimentos com Baixa Automática', text2: 'R$ 500,00' }, { text1: 'Investimentos sem Baixa Automática', text2: 'R$ 500,00' }
  ]
}

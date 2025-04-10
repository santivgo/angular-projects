import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { DebitCardComponent } from './debit-card/debit-card.component';



@NgModule({
  declarations: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent]
})
export class ComponentsModule { }

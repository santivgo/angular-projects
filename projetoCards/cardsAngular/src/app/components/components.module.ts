import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { ItemComponent } from './item/item.component';
import { CardLineComponent } from './card-line/card-line.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent, ItemComponent, CardLineComponent, CardHeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent, ItemComponent, CardHeaderComponent]
})
export class ComponentsModule { }

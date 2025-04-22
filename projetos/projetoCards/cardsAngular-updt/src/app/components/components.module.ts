import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardLineComponent } from './card-line/card-line.component';
import { CardHeaderComponent } from './card-components/card-header/card-header.component';
import { FooterComponent } from './footer/footer.component';
import { CardBrandComponent } from './card-brand/card-brand.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent, CardItemComponent, CardLineComponent, CardHeaderComponent, FooterComponent, CardBrandComponent, CardComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [BalanceCardComponent, CreditCardComponent, ClientInfoComponent, DebitCardComponent, CardItemComponent, CardHeaderComponent, CardComponent]
})
export class ComponentsModule { }

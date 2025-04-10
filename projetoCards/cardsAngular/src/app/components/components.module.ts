import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from './balance-card/balance-card.component';



@NgModule({
  declarations: [BalanceCardComponent],
  imports: [
    CommonModule
  ],
  exports: [BalanceCardComponent]
})
export class ComponentsModule { }

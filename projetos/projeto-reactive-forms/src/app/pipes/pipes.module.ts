import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneTypePipe } from './phone-type.pipe';
import { PhonePipe } from './phone.pipe';
import { AddressTypePipe } from './address-type.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaritalStatusPipe,
    PhoneTypePipe,
    PhonePipe,
    CurrencyPipe,
    DatePipe,
    AddressTypePipe,
    CpfPipe
  ], exports: [
    MaritalStatusPipe,
    PhoneTypePipe,
    PhonePipe,
    AddressTypePipe,
    CpfPipe]
})
export class PipesModule { }

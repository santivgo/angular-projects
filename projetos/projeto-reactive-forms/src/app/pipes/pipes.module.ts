import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneTypePipe } from './phone-type.pipe';
import { PhonePipe } from './phone.pipe';
import { AddressTypePipe } from './address-type.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaritalStatusPipe,
    PhoneTypePipe,
    PhonePipe,
    AddressTypePipe
  ], exports: [
    MaritalStatusPipe,
    PhoneTypePipe,
    PhonePipe,
    AddressTypePipe]
})
export class PipesModule { }

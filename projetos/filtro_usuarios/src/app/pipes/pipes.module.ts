import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonePipe } from './telefone.pipe';
import { EnderecoPipe } from './endereco.pipe';
import { StatusPipe } from './status.pipe';
import { VazioPipe } from './vazio.pipe';



@NgModule({
  declarations: [
    TelefonePipe,
    EnderecoPipe,
    StatusPipe,
    VazioPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TelefonePipe, EnderecoPipe, StatusPipe, VazioPipe
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefonePipe } from './telefone.pipe';
import { EnderecoPipe } from './endereco.pipe';
import { StatusPipe } from './status.pipe';



@NgModule({
  declarations: [
    TelefonePipe,
    EnderecoPipe,
    StatusPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TelefonePipe, EnderecoPipe, StatusPipe,
  ]
})
export class PipesModule { }

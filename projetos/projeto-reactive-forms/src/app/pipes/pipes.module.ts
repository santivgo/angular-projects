import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { maritalStatusPipe } from './marital-status.pipe';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    maritalStatusPipe
  ], exports: [maritalStatusPipe]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListaComponent } from './item-lista/item-lista.component';



@NgModule({
  declarations: [
    ItemListaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ItemListaComponent
  ]
})
export class ComponentsModule { }

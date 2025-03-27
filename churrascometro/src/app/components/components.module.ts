import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChurFormComponent } from './chur-form/chur-form.component';



@NgModule({
  declarations: [
    ChurFormComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    ChurFormComponent
  ]
})
export class ComponentsModule { }

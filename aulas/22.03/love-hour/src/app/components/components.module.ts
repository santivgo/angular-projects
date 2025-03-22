import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLovehourComponent } from './button-lovehour/button-lovehour.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ButtonLovehourComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ],
  exports: [
    ButtonLovehourComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChurFormComponent } from './chur-form/chur-form.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    ChurFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ChurFormComponent
  ]
})
export class ComponentsModule { }

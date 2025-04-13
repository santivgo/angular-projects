import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel/wheel.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WheelComponent
  ],
  imports: [
    CommonModule, FormsModule

  ], exports: [WheelComponent]
})
export class ComponentsModule { }

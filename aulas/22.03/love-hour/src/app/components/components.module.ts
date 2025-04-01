import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLovehourComponent } from './button-lovehour/button-lovehour.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RealContentComponent } from './content/real-content.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PlayerComponent } from './player/player.component';
import { ClockComponent } from './clock/clock.component';



@NgModule({
  declarations: [
    ButtonLovehourComponent,
    RealContentComponent,
    CarouselComponent,
    PlayerComponent,
    ClockComponent
  ],
  imports: [
    CommonModule, AngularMaterialModule
  ],
  exports: [
    ButtonLovehourComponent, RealContentComponent
  ]
})
export class ComponentsModule { }

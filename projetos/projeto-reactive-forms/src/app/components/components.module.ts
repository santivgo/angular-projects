import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { EnumsModule } from '../enums/enums.module';
import { ServicesModule } from '../services/services.module';
import { TypesModule } from '../types/types.module';
import { InterfacesModule } from '../interfaces/interfaces.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    EnumsModule,
    ServicesModule,
    TypesModule,
    InterfacesModule
  ]
})
export class ComponentsModule { }

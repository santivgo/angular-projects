import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { EnumsModule } from '../enums/enums.module';
import { ServicesModule } from '../services/services.module';
import { TypesModule } from '../types/types.module';
import { InterfacesModule } from '../interfaces/interfaces.module';
import { SwitchUsersComponent } from './switch-users/switch-users.component';
import { GeneralUserInfoComponent } from './user/general-user-info/general-user-info.component';
import { UserInfoComponent } from './user/user-info/user-info.component';



@NgModule({
  declarations: [
    SwitchUsersComponent,
    UserInfoComponent,
    GeneralUserInfoComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    EnumsModule,
    ServicesModule,
    TypesModule,
    InterfacesModule,
    AngularMaterialModule
  ],
  exports: [
    SwitchUsersComponent,
    UserInfoComponent
  ]
})
export class ComponentsModule { }

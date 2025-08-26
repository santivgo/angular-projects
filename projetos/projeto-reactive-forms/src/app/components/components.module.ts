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
import { UserInfoCellComponent } from './user/user-info-cell/user-info-cell.component';
import { ContactUserInfoComponent } from './user/contact-user-info/contact-user-info.component';
import { UserPhoneListComponent } from './user/components/user-phone-list/user-phone-list.component';
import { UserAddressListComponent } from './user/components/user-address-list/user-address-list.component';



@NgModule({
  declarations: [
    SwitchUsersComponent,
    UserInfoComponent,
    GeneralUserInfoComponent,
    UserInfoCellComponent,
    ContactUserInfoComponent,
    UserPhoneListComponent,
    UserAddressListComponent
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

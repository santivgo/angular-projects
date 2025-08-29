import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { EnumsModule } from '../enums/enums.module';
import { ServicesModule } from '../services/services.module';
import { TypesModule } from '../types/types.module';
import { InterfacesModule } from '../interfaces/interfaces.module';
import { SwitchUsersComponent } from './switch-users/switch-users.component';
import { GeneralUserInfoComponent } from './user/sections/general-user-info/general-user-info.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { UserInfoCellComponent } from './user/user-info-cell/user-info-cell.component';
import { ContactUserInfoComponent } from './user/sections/contact-user-info/contact-user-info.component';
import { UserPhoneListComponent } from './user/sections/components/user-phone-list/user-phone-list.component';
import { UserAddressListComponent } from './user/sections/components/user-address-list/user-address-list.component';
import { DependentUserInfoComponent } from './user/sections/dependent-user-info/dependent-user-info.component';
import { DummyButtonComponent } from './buttons/dummy-button/dummy-button.component';
import { ButtonsContainerComponent } from './buttons/buttons-container/buttons-container.component';



@NgModule({
  declarations: [
    SwitchUsersComponent,
    UserInfoComponent,
    GeneralUserInfoComponent,
    UserInfoCellComponent,
    ContactUserInfoComponent,
    UserPhoneListComponent,
    UserAddressListComponent,
    DependentUserInfoComponent,
    DummyButtonComponent,
    ButtonsContainerComponent
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
    UserInfoComponent,
    DummyButtonComponent,
    ButtonsContainerComponent
  ]
})
export class ComponentsModule { }

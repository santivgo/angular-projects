import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { EnumsModule } from '../enums/enums.module';
import { TypesModule } from '../types/types.module';
import { InterfacesModule } from '../interfaces/interfaces.module';
import { SwitchUsersComponent } from './switch-users/switch-users.component';
import { UserInfoCellComponent } from './user/user-info/user-info-cell/user-info-cell.component';
import { UserPhoneListComponent } from './user/sections/components/user-phone-list/user-phone-list.component';
import { UserAddressListComponent } from './user/sections/components/user-address-list/user-address-list.component';
import { DummyButtonComponent } from './buttons/dummy-button/dummy-button.component';
import { ButtonsContainerComponent } from './buttons/buttons-container/buttons-container.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { GeneralUserInfoEditComponent } from './user/sections/edit/general-user-info-edit/general-user-info-edit.component';
import { DependentUserInfoEditComponent } from './user/sections/edit/dependent-user-info-edit/dependent-user-info-edit.component';
import { ContactUserInfoEditComponent } from './user/sections/edit/contact-user-info-edit/contact-user-info-edit.component';
import { GeneralUserInfoComponent } from './user/sections/default/general-user-info/general-user-info.component';
import { ContactUserInfoComponent } from './user/sections/default/contact-user-info/contact-user-info.component';
import { DependentUserInfoComponent } from './user/sections/default/dependent-user-info/dependent-user-info.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormItemComponent } from './user/forms/form-item/form-item.component';
import { NgxMaskDirective, provideEnvironmentNgxMask } from "ngx-mask";

import { EditUserPhoneListComponent } from './user/sections/components/edit-user-phone-list/edit-user-phone-list.component';
import { EditUserAddressListComponent } from './user/sections/components/edit-user-address-list/edit-user-address-list.component';
import { EditUserDependentListComponent } from './user/sections/components/edit-user-dependent-list/edit-user-dependent-list.component';
import { UserDependentListComponent } from './user/sections/components/user-dependent-list/user-dependent-list.component';


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
    ButtonsContainerComponent,
    GeneralUserInfoEditComponent,
    DependentUserInfoEditComponent,
    ContactUserInfoEditComponent,
    FormItemComponent,
    EditUserPhoneListComponent,
    EditUserAddressListComponent,
    EditUserDependentListComponent,
    UserDependentListComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    EnumsModule,
    TypesModule,
    InterfacesModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    NgxMaskDirective,
  ],
  exports: [
    SwitchUsersComponent,
    UserInfoComponent,
    DummyButtonComponent,
    ButtonsContainerComponent,

  ],
  providers: [
    provideEnvironmentNgxMask(),

  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MenuComponent, DashboardUserComponent, UserTableComponent],
  imports: [
    AngularMaterialModule, FormsModule, CommonModule
  ],
  exports: [
    AngularMaterialModule,
    MenuComponent, DashboardUserComponent, UserTableComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MenuComponent } from './menu/menu.component';
import { FiltrarButtonComponent } from './filtrar-button/filtrar-button.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { UserTableComponent } from './user-table/user-table.component';



@NgModule({
  declarations: [MenuComponent, FiltrarButtonComponent, DashboardUserComponent, UserTableComponent],
  imports: [
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    MenuComponent, FiltrarButtonComponent, DashboardUserComponent, UserTableComponent
  ]
})
export class ComponentsModule { }

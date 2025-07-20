import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user';
@Component({
  selector: 'app-dashboard-user',
  standalone: false,
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss'
})
export class DashboardUserComponent {
  @Input({ required: false, alias: "user" })
  user: IUser = {} as IUser;
}

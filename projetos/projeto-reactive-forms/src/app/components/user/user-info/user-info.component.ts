import { Component, Input } from '@angular/core';
import { IUser } from '../../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.sass'
})
export class UserInfoComponent {
  @Input({ 'required': true, 'alias': 'userSelected' }) user: IUser = {} as IUser;
  @Input({ 'required': true }) isInEditMode: boolean = false
  currentTabIndex: number = 0;
}

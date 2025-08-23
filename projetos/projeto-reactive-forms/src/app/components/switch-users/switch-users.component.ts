import { Component, Input } from '@angular/core';
import { UsersList } from '../../types/user-list.type';

@Component({
  selector: 'app-switch-users',
  standalone: false,
  templateUrl: './switch-users.component.html',
  styleUrl: './switch-users.component.sass'
})
export class SwitchUsersComponent {
  @Input({ 'required': true }) userList: UsersList = []
}

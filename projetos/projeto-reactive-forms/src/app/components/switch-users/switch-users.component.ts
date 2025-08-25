import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersList } from '../../types/user-list.type';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-switch-users',
  standalone: false,
  templateUrl: './switch-users.component.html',
  styleUrl: './switch-users.component.sass'
})
export class SwitchUsersComponent {

  selectedUser: IUser | null = null;
  @Input({ 'required': true }) userList: UsersList = []

  @Output() userEmit: EventEmitter<IUser> = new EventEmitter<IUser>();
  onUserClicked(userClicked: IUser) {
    this.selectedUser = userClicked
    this.userEmit.emit(userClicked)
  }
}

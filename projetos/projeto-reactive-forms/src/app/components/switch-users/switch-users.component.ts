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
  @Input({ 'required': true }) isInEditMode: boolean = false

  @Output() indexUserEmit: EventEmitter<number> = new EventEmitter<number>();
  onUserClicked(index: number) {

    if (!this.isInEditMode) {
      this.selectedUser = this.userList[index]
      this.indexUserEmit.emit(index)
    }

  }
}

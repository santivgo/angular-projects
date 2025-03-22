import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user';
import { Usuarios } from '../../data/users-data';
@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  @Input({ 'required': true })
  usuarios: IUser[] = [];



  @Output('userEmitter')
  userEmitter = new EventEmitter<IUser>();


  displayedColumns = ['nome', 'dataCadastro', 'ativo']

  onUserClicked(user: IUser): void {
    this.userEmitter.emit(user);
  }
}

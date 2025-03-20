import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user';
import { Usuarios } from '../../data/users-data';

@Component({
  selector: 'app-user-table',
  standalone: false,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  usuarios: IUser[] = Usuarios;
  displayedColumns = ['nome', 'dataCadastro', 'ativo']
}

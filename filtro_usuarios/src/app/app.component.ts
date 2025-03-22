import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  usuarioSelecionado: IUser = {} as IUser;
  showUserDetails: boolean = false;

  userClicked(usuario: IUser) {
    this.usuarioSelecionado = usuario;
    this.showUserDetails = true;
  }
}

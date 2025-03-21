import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { Usuarios } from './data/users-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'filtro_usuarios';

  usuarioSelecionado: IUser = Usuarios[0];

  userClicked(usuario: IUser) {
    this.usuarioSelecionado = usuario;
  }
}

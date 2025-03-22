import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { Usuarios } from './data/users-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  listaUsuarios: IUser[] = [];
  usuarioSelecionado: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void { // Assim que o componente carrega, ele executa a função que eu inserir aqui
    setTimeout(() => {
      this.listaUsuarios = Usuarios
    }, 3000)
  }

  userClicked(usuario: IUser) {
    this.usuarioSelecionado = usuario;
    this.showUserDetails = true;
  }
}

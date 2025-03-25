import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { Usuarios } from './data/users-data';
import { IFilterOptions } from './interfaces/filter.interface';
import { fileURLToPath } from 'node:url';
import { filtrarLista } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  listaUsuarios: IUser[] = [];
  listaUsuariosFiltradas: IUser[] = []
  usuarioSelecionado: IUser = {} as IUser;
  showUserDetails: boolean = false;

  ngOnInit(): void { // Assim que o componente carrega, ele executa a função que eu inserir aqui
    setTimeout(() => {
      this.listaUsuarios = Usuarios
      this.listaUsuariosFiltradas = this.listaUsuarios;
    }, 1)
  }


  getFiltros(filterObject: IFilterOptions) {
    this.listaUsuariosFiltradas = this.listaUsuarios
    const INVALID_FILTER = !filterObject.name && !filterObject.startDate && !filterObject.endDate && !filterObject.status

    if (INVALID_FILTER) {
      this.listaUsuariosFiltradas = this.listaUsuarios;
      return
    }
    this.listaUsuariosFiltradas = filtrarLista(filterObject, this.listaUsuariosFiltradas)

  }


  userClicked(usuario: IUser) {
    this.usuarioSelecionado = usuario;
    this.showUserDetails = true;
  }


}

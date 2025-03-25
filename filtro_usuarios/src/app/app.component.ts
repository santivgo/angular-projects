import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { Usuarios } from './data/users-data';
import { IFilterOptions } from './interfaces/filter.interface';

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

  filterListByName(name: string | undefined, listaFiltrada: IUser[]): IUser[] {
    //filter sempre retorna um array
    const NOME_N_TIPADO = name === undefined

    if (NOME_N_TIPADO) {
      return listaFiltrada
    }

    return listaFiltrada.filter((p) => p.nome && name && p.nome.toLowerCase().includes(name.toLowerCase()));

  }
  filtrarLista(filtro: IFilterOptions, listaFiltrada: IUser[]): IUser[] { // Função Pura, não modifica variaveis externas e não precisa de VARIÁVEIS EXTERNAS pra funcionar.

    let filteredList: IUser[] = listaFiltrada;
    filteredList = this.filterListByName(filtro.name, listaFiltrada)
    return filteredList

  }

  getFiltros(filterObject: IFilterOptions) {
    this.listaUsuariosFiltradas = this.listaUsuarios
    const INVALID_FILTER = !filterObject.name && !filterObject.startDate && !filterObject.endDate && !filterObject.status

    if (INVALID_FILTER) {
      this.listaUsuariosFiltradas = this.listaUsuarios;
      return
    }
    this.listaUsuariosFiltradas = this.filtrarLista(filterObject, this.listaUsuariosFiltradas)

  }


  userClicked(usuario: IUser) {
    this.usuarioSelecionado = usuario;
    this.showUserDetails = true;
  }


}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./shared/components/user-card/user-card.component";
import { IUser } from './core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./shared/components/form/form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'projeto-tdf';

  actualUser: IUser | undefined;

  usuariosTeste: IUser[] = [
  {
    nome: "Ana Souza",
    usuario: "ana_souza",
    email: "ana.souza@example.com",
    senha: "senhaAna123",
    resenha: "senhaAna123",
    data_nasc: new Date("1995-03-12"),
    estado: "SP",
    musicas: [
      { titulo: "Shape of You", artista: "Ed Sheeran", genero: "Pop", favorita: true },
      { titulo: "Bohemian Rhapsody", artista: "Queen", genero: "Rock", favorita: false }
    ]
  },
  {
    nome: "Carlos Lima",
    usuario: "carlos_l",
    email: "carlos.lima@example.com",
    senha: "senhaCarlos456",
    resenha: "senhaCarlos456",
    data_nasc: new Date("1988-11-05"),
    estado: "RJ",
    musicas: [
      { titulo: "Smells Like Teen Spirit", artista: "Nirvana", genero: "Grunge", favorita: true },
      { titulo: "Billie Jean", artista: "Michael Jackson", genero: "Pop", favorita: true },
      { titulo: "Blinding Lights", artista: "The Weeknd", genero: "Synthpop", favorita: false }
    ]
  },
  {
    nome: "Beatriz Oliveira",
    usuario: "bia_oliveira",
    email: "beatriz.oliveira@example.com",
    senha: "senhaBia789",
    resenha: "senhaBia789",
    data_nasc: new Date("2000-07-25"),
    estado: "MG",
    musicas: [
      { titulo: "Levitating", artista: "Dua Lipa", genero: "Pop", favorita: true },
      { titulo: "Hotel California", artista: "Eagles", genero: "Rock", favorita: false }
    ]
  }
];
  changeUser(user: IUser){
    this.actualUser = user;
    console.log(user)
  }
}

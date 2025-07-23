import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./shared/components/user-card/user-card.component";
import { IUser } from './core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./shared/components/form/form.component";
import { EstadosEnum } from './core/enums/states.enum';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  title = 'projeto-tdf';
  usuariosTeste: IUser[] = [];
  actualUser: IUser | undefined;

  constructor(private readonly _userService: UserService){}
  getUsers(){
    this._userService.getUsersList().subscribe((userList)=> this.usuariosTeste = userList)
  }
  
  changeUser(user: IUser){
    this.actualUser = user;
  }

  

  ngOnInit(): void {
    this.getUsers();
  }




}

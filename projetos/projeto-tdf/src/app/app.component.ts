import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./shared/components/user-card/user-card.component";
import { IUser } from './core/interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { FormComponent } from "./shared/components/form/form.component";
import { EstadosEnum } from './core/enums/states.enum';
import { UserService } from './core/services/user.service';
import { GenresService } from './core/services/genres.service';
import { BrazilianStatesService } from './core/services/brazilianStates.service';
import { IGenre } from './core/interfaces/genre.interface';
import { IState } from './core/interfaces/state.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  title = 'projeto-tdf';
  userListResponse: IUser[] = [];
  actualUser: IUser | undefined;
  genreList: IGenre[] = []
  stateList: IState[] = []

  constructor(private readonly _genresService: GenresService, private readonly _brazilianStatesService: BrazilianStatesService, private readonly _userService: UserService){}
  
  getUsers(): void{
    this._userService.getUsersList().subscribe((userList)=> this.userListResponse = userList)
  }


  getGenres(): void{
    this._genresService.getAllGenres().subscribe((genreList)=> this.genreList = genreList)
  }
  
  getStates(): void{
    this._brazilianStatesService.getStates().subscribe((states)=> this.stateList = states)
  
  }

  
  ngOnInit(): void {
   this.getGenres()
   this.getStates()
   this.getUsers();

  }

  
  changeUser(user: IUser){
    this.actualUser = structuredClone(user);
  }

  


}

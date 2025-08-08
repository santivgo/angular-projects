import { Component, inject, OnInit } from '@angular/core';
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
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { CompareUsersDialogComponent } from "./shared/components/compare-users-dialog/compare-users-dialog/compare-users-dialog.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserCardComponent, CommonModule, FormComponent, CompareUsersDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{

  readonly dialog = inject(MatDialog);
  title = 'projeto-tdf';
  userListResponse: IUser[] = [];
  actualUser: IUser | undefined;
  actualUserId: number | undefined;
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

  
  changeUser(user: IUser, index: number){
    console.log(index)
    this.actualUser = structuredClone(user);
    this.actualUserId = index;
  }

  compareUsersDialog(alteredActualUser: IUser, alteredUserIndex: number | undefined){
    if (alteredUserIndex === undefined) return 
    const dialogRef = this.dialog.open(CompareUsersDialogComponent, {
      data: {originalUser: structuredClone(this.userListResponse[alteredUserIndex]), alteredUser: structuredClone(alteredActualUser)
}, minWidth: '70%'
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.updateUser(alteredActualUser, alteredUserIndex)
      }
    });
  }
  
  updateUser(alteredUser:IUser, alteredUserIndex: number){
    this.userListResponse[alteredUserIndex] = alteredUser
  }
  


}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersList } from './types/user-list.type';
import { IUser } from './interfaces/user/user.interface';
import { take } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {


  constructor(private readonly _userService: UsersService) { }
  title = 'projeto-reactive-forms';
  userList: UsersList = [];
  userSelected: IUser | null = null
  isInEditMode: boolean = false;


  ngOnInit(): void {
    this._userService.getUsers().pipe(take(1)).subscribe((userList) => this.userList = userList)
  }

  setActualUser(event: number) {
    console.log(event)
    this.userSelected = structuredClone(this.userList[event]);
  }

  cancelEditMode() {
    this.isInEditMode = false;
  }
  setEditMode() {
    this.isInEditMode = true
  }

}

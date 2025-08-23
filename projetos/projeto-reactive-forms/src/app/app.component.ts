import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersList } from './types/user-list.type';


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


  ngOnInit(): void {
    this._userService.getUsers().subscribe((userList) => this.userList = userList)
  }

}

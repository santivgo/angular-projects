import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { UsersList } from '../../types/users-list.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obs-array',
  imports: [CommonModule],
  templateUrl: './obs-array.component.html',
  styleUrl: './obs-array.component.sass'
})
export class ObsArrayComponent implements OnInit {
  constructor(private readonly _userService: UsersService){}
  usersList$!: Observable<UsersList>; 


  ngOnInit(): void {
    this.usersList$ = this._userService.getUsers()
  }

}

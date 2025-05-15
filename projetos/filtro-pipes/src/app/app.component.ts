import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  title = 'filtro-pipes';
  usersList$!: Observable<IUser[]>;

  constructor(private readonly _userService:UserService ){}

  ngOnInit(): void {
    this.usersList$ = this._userService.getAllUsers()
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = []
}

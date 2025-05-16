import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { StatusPipe } from './pipes/status.pipe';

registerLocaleData(ptBr);
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule, CommonModule, StatusPipe],
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

  displayedColumns: string[] = ['customerName', 'customerStatus', 'operationDate', 'operationValue', 'operationRisck'];
  dataSource = []
}

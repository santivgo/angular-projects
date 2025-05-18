import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { Observable, Subscribable, Subscription, take } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ImgStatusPipe } from './pipes/img-status.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterPipe } from './pipes/filter.pipe';
registerLocaleData(localePt, 'pt-br');
  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule, CommonModule, ImgStatusPipe, FilterPipe, StatusPipe, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'filtro-pipes';
  name = '';
  usersList$!: Observable<IUser[]>;

  userListAlt: IUser[] = [];
  userListRef: Subscription | undefined;


  constructor(private readonly _userService:UserService ){}

  ngOnInit(): void {
    this.usersList$ = this._userService.getAllUsers()
    this.userListRef = this._userService.getAllUsers().pipe(take(1)).subscribe((userList)=>{
      this.userListAlt = userList;
    })
  }

  ngOnDestroy(): void {
    this.userListAlt && this.userListRef!.unsubscribe()
    
  }

  displayedColumns: string[] = ['customerName', 'customerStatus', 'operationDate', 'operationHour', 'operationValue', 'operationRisck'];
  dataSource = []
}

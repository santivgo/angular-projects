import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-obs-obj',
  imports: [CommonModule],
  templateUrl: './obs-obj.component.html',
  styleUrl: './obs-obj.component.sass'
})
export class ObsObjComponent implements OnInit, OnDestroy{


  userSubs: Subscription | undefined;
  user$!: Observable<IUser>;
  constructor(private readonly _usersService: UsersService){}

  ngOnInit(): void {
    this.user$ = this._usersService.getUserById(1)    
  }

  ngOnDestroy(): void {
     this.userSubs && this.userSubs?.unsubscribe()
    
  }

  onButtonClicked(n: number){
    this.user$ = this._usersService.getUserById(n)    
  }
}

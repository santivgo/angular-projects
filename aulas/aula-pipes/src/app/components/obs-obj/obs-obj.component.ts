import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-obs-obj',
  imports: [CommonModule],
  templateUrl: './obs-obj.component.html',
  styleUrl: './obs-obj.component.sass'
})
export class ObsObjComponent implements OnInit{
  user: IUser = {} as IUser;
  constructor(private readonly _usersService: UsersService){}
  ngOnInit(): void {
    this._usersService.getUserById(1).subscribe((response)=> {this.user = response} )
    
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersList } from './types/user-list.type';
import { IUser } from './interfaces/user/user.interface';
import { take } from 'rxjs';
import { convertUserFormToUser } from './utils/convert-user-form-to-user';


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
  selectedUserIndex: number | null = null;
  isInEditMode: boolean = false;
  isFormValid: boolean = true
  isFormDirty: boolean = false



  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(): void {
    this._userService.getUsers()
      .pipe(take(1))
      .subscribe((userList) => this.userList = userList)
  }

  setActualUser(event: number) {
    this.userSelected = structuredClone(this.userList[event]);
    console.log(this.userSelected.phoneList[0])
    this.selectedUserIndex = event

  }

  setFormDirty(isDirty: boolean) {
    setTimeout(() => { this.isFormDirty = isDirty; }, 0)
  }
  setFormValidity(isValid: boolean) {

    setTimeout(() => { this.isFormValid = isValid }, 0)

  }



  updateUser(): void {
    if (this.selectedUserIndex === null) return;

    this.isInEditMode = false;
    const newUser: IUser = convertUserFormToUser(this._userService.userFormRawValue);


    this._userService.updateUser(newUser, this.selectedUserIndex)
      .subscribe((newUserResponse) => {
        if (this.selectedUserIndex == undefined) return
        this.userList[this.selectedUserIndex] = newUserResponse
        this.userSelected = structuredClone(newUserResponse)

      });



  }

  cancelEditMode() {
    this.isInEditMode = false;
  }
  setEditMode() {
    this.isInEditMode = true
  }

}

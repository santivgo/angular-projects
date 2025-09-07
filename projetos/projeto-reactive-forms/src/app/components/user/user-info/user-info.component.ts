import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../../interfaces/user/user.interface';
import { UserFormController } from '../forms/user-form-controller';

@Component({
  selector: 'app-user-info',
  standalone: false,
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.sass'
})
export class UserInfoComponent extends UserFormController implements OnChanges {

  @Input({ 'required': true, 'alias': 'userSelected' }) user: IUser = {} as IUser;
  @Input({ 'required': true }) isInEditMode: boolean = false

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isInEditMode)
    if (changes['user'] && Object.keys(changes['user'].currentValue).length > 0) {
      this.fulfillUserForm(this.user)
    }
  }

  currentTabIndex: number = 0;


}

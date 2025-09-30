import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
  @Output() formValidityEmitt = new EventEmitter<boolean>()

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && Object.keys(changes['user'].currentValue).length > 0) {
      this.fulfillUserForm(this.user)
    }
    this.userInfoForm.valueChanges.subscribe((value) => { this.isFormValid() })

  }

  isFormValid(): void {
    this.formValidityEmitt.emit(this.userInfoForm.valid)
  }







  currentTabIndex: number = 0;


}

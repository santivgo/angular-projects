import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../../../interfaces/user/user.interface';
import { UserFormController } from '../forms/user-form-controller';
import { distinctUntilChanged } from 'rxjs';

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
  @Output() formDirtyEmitt = new EventEmitter<boolean>()


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && Object.keys(changes['user'].currentValue).length > 0 || changes['isInEditMode']) {
      this.fulfillUserForm(this.user)
    }



    this.checkFormValidity()

  }

  checkFormValidity(): void {
    this.userInfoForm.valueChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.isFormDirty()
      this.isFormValid()

    }

    )
  }

  isFormDirty(): void {
    this.formDirtyEmitt.emit(this.userInfoForm.dirty)
  }
  isFormValid(): void {
    this.formValidityEmitt.emit(this.userInfoForm.valid)
  }







  currentTabIndex: number = 0;


}

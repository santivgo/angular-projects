import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from '../../../../../interfaces/user/user.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-user-info-edit',
  standalone: false,
  templateUrl: './general-user-info-edit.component.html',
  styleUrl: './general-user-info-edit.component.sass'
})
export class GeneralUserInfoEditComponent implements OnChanges{

  
  @Input({ 'required': true }) user: IUser = {} as IUser
  userInfoForm!: FormGroup
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['user'].currentValue){
        this.userInfoForm = new FormGroup({
            name: new FormControl(this.user.name),
            email: new FormControl(this.user.email),
            country: new FormControl(this.user.country),
            state: new FormControl(this.user.state),
            maritalStatus: new FormControl(this.user.maritalStatus),
            monthlyIncome: new FormControl(this.user.monthlyIncome),
            birthDate: new FormControl(this.user.birthDate),
            phoneList: new FormArray([new FormGroup({
              type: new FormControl(''),
              areaCode: new FormControl(''),
              internationalCode: new FormControl(''),
              number: new FormControl('')
            })]),
            addressList: new FormArray([new FormGroup({
              type: new FormControl(''),
              street: new FormControl(''),
              complement: new FormControl(''),
              country: new FormControl(''),
              state: new FormControl(''),
              city: new FormControl(''),
            })]),
            dependentsList: new FormArray([new FormGroup({
              name: new FormControl(''),
              age: new FormControl(''),
              document: new FormControl(''),
            })]),
          })

      }
  }
}

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../../../../interfaces/user/user.interface';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-user-info-edit',
  standalone: false,
  templateUrl: './contact-user-info-edit.component.html',
  styleUrl: './contact-user-info-edit.component.sass'
})
export class ContactUserInfoEditComponent implements OnChanges {
  @Input({ required: true }) user!: IUser
  userInfoForm!: FormGroup

  buildGroup(): void {
    this.userInfoForm = new FormGroup({
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
    })
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'].currentValue) {

      this.buildGroup()

    }
  }

}

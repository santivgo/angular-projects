import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneList } from '../../../../../types/phone-list.type';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-phone-list',
  standalone: false,
  templateUrl: './edit-user-phone-list.component.html',
  styleUrl: './edit-user-phone-list.component.sass'
})
export class EditUserPhoneListComponent implements OnChanges {
  @Input({ required: true, alias: 'phoneList' }) userPhoneList!: PhoneList
  userPhoneForm!: FormGroup
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userPhoneList']) {
      console.log(this.userPhoneList)
    }
  }

  buildGroup(): void {
    this.userPhoneForm = new FormGroup({
      phoneList: new FormArray([new FormGroup({
        type: new FormControl(''),
        areaCode: new FormControl(''),
        internationalCode: new FormControl(''),
        number: new FormControl('')
      })]),
    })
  }

}
